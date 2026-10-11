import React, { createContext, useContext, useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PortraitContextType {
  portraitUrl: string;
  isCustom: boolean;
  setPortraitUrl: (url: string) => void;
  resetPortrait: () => void;
  uploadFromFile: (file: File) => Promise<void>;
}

const PortraitContext = createContext<PortraitContextType | undefined>(undefined);

const STORAGE_KEY = 'sayrul_custom_portrait_v1';

export const PortraitProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portraitUrl, setPortraitUrlState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved.startsWith('data:image/')) {
        return saved;
      }
    } catch {
      // ignore
    }
    return PERSONAL_INFO.portraitImage;
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    try {
      return !!localStorage.getItem(STORAGE_KEY);
    } catch {
      return false;
    }
  });

  const setPortraitUrl = async (url: string) => {
    try {
      const optimizedUrl = await compressImage(url);
      setPortraitUrlState(optimizedUrl);
      setIsCustom(true);
      try {
        localStorage.setItem(STORAGE_KEY, optimizedUrl);
      } catch {
        // storage quota exceeded
      }
    } catch {
      setPortraitUrlState(url);
      setIsCustom(true);
    }
  };

  const compressImage = (dataUrl: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        const maxDim = 1200;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', 0.9));
        } else {
          resolve(dataUrl);
        }
      };
      img.onerror = () => resolve(dataUrl);
      img.src = dataUrl;
    });
  };

  const resetPortrait = () => {
    setPortraitUrlState(PERSONAL_INFO.portraitImage);
    setIsCustom(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const uploadFromFile = async (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        if (typeof reader.result === 'string') {
          await setPortraitUrl(reader.result);
          resolve();
        } else {
          reject(new Error('Failed to read image file'));
        }
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith('image/')) {
          const file = items[i].getAsFile();
          if (file) {
            uploadFromFile(file);
            break;
          }
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  return (
    <PortraitContext.Provider
      value={{
        portraitUrl,
        isCustom,
        setPortraitUrl,
        resetPortrait,
        uploadFromFile,
      }}
    >
      {children}
    </PortraitContext.Provider>
  );
};

export const usePortrait = (): PortraitContextType => {
  const context = useContext(PortraitContext);
  if (!context) {
    throw new Error('usePortrait must be used within a PortraitProvider');
  }
  return context;
};
