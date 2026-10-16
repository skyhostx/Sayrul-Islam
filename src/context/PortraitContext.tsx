import React, { createContext, useContext, useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PortraitContextType {
  portraitUrl: string;
  isCustom: boolean;
  setPortraitUrl: (url: string) => Promise<void>;
  resetPortrait: () => void;
  uploadFromFile: (file: File) => Promise<void>;
}

const PortraitContext = createContext<PortraitContextType | undefined>(undefined);

const STORAGE_KEYS = [
  'sayrul_portrait_persistent',
  'sayrul_portrait_real_v5',
  'sayrul_portrait_clean_v4',
  'sayrul_custom_portrait',
];

const DB_NAME = 'SayrulPortfolioDB';
const STORE_NAME = 'portraits';
const DB_KEY = 'primary_portrait';

const getFromIndexedDB = (): Promise<string | null> => {
  return new Promise((resolve) => {
    try {
      if (typeof indexedDB === 'undefined') {
        resolve(null);
        return;
      }
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = () => {
        const db = request.result;
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const getReq = store.get(DB_KEY);
        getReq.onsuccess = () => resolve(getReq.result || null);
        getReq.onerror = () => resolve(null);
      };
      request.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
};

const saveToIndexedDB = (dataUrl: string): Promise<void> => {
  return new Promise((resolve) => {
    try {
      if (typeof indexedDB === 'undefined') {
        resolve();
        return;
      }
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = () => {
        const db = request.result;
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.put(dataUrl, DB_KEY);
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      };
      request.onerror = () => resolve();
    } catch {
      resolve();
    }
  });
};

const removeFromIndexedDB = (): Promise<void> => {
  return new Promise((resolve) => {
    try {
      if (typeof indexedDB === 'undefined') {
        resolve();
        return;
      }
      const request = indexedDB.open(DB_NAME, 1);
      request.onsuccess = () => {
        const db = request.result;
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.delete(DB_KEY);
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      };
      request.onerror = () => resolve();
    } catch {
      resolve();
    }
  });
};

export const PortraitProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portraitUrl, setPortraitUrlState] = useState<string>(() => {
    // Synchronous initial check across localStorage keys
    try {
      for (const key of STORAGE_KEYS) {
        const saved = localStorage.getItem(key);
        if (saved && (saved.startsWith('data:image/') || saved.startsWith('http') || saved.startsWith('/'))) {
          return saved;
        }
      }
      // Also check any general key with portrait or sayrul
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && (k.includes('portrait') || k.includes('sayrul'))) {
          const val = localStorage.getItem(k);
          if (val && val.startsWith('data:image/')) {
            return val;
          }
        }
      }
    } catch {
      // ignore
    }
    return PERSONAL_INFO.portraitImage;
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    try {
      for (const key of STORAGE_KEYS) {
        if (localStorage.getItem(key)) return true;
      }
    } catch {
      // ignore
    }
    return false;
  });

  // Asynchronous check for IndexedDB on mount
  useEffect(() => {
    let isMounted = true;
    getFromIndexedDB().then((idbUrl) => {
      if (isMounted && idbUrl && idbUrl.startsWith('data:image/')) {
        setPortraitUrlState(idbUrl);
        setIsCustom(true);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const setPortraitUrl = async (url: string): Promise<void> => {
    try {
      const optimizedUrl = await compressImage(url);
      setPortraitUrlState(optimizedUrl);
      setIsCustom(true);

      // 1. Save to IndexedDB (virtually unlimited quota)
      await saveToIndexedDB(optimizedUrl);

      // 2. Also save to localStorage as fallback
      try {
        for (const key of STORAGE_KEYS) {
          localStorage.setItem(key, optimizedUrl);
        }
      } catch {
        // quota exceeded - IndexedDB handles it
      }

      // 3. Post to dev server to write directly to public & asset files
      try {
        fetch('/api/save-portrait', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ dataUrl: optimizedUrl }),
        }).catch(() => {});
      } catch {
        // ignore if static build
      }
    } catch {
      setPortraitUrlState(url);
      setIsCustom(true);
      saveToIndexedDB(url);
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
          const isPng = dataUrl.startsWith('data:image/png');
          if (isPng) {
            try {
              const webp = canvas.toDataURL('image/webp', 0.95);
              if (webp.startsWith('data:image/webp')) {
                resolve(webp);
                return;
              }
            } catch {
              // fallback
            }
            resolve(canvas.toDataURL('image/png'));
          } else {
            resolve(canvas.toDataURL('image/jpeg', 0.92));
          }
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
    removeFromIndexedDB();
    try {
      for (const key of STORAGE_KEYS) {
        localStorage.removeItem(key);
      }
    } catch {
      // ignore
    }
  };

  const uploadFromFile = async (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        if (typeof reader.result === 'string') {
          const rawDataUrl = reader.result;
          await setPortraitUrl(rawDataUrl);
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

  useEffect(() => {
    // Automatically load photo if placed in the public/ folder
    const checkPublicImages = async () => {
      const candidates = [
        '/Sayrul Islam.png', 
        '/Sayrul%20Islam.png', 
        '/sayrul-portrait.png',
        '/sayrul.png', 
        '/sayrul-islam.png', 
        '/profile.png'
      ];
      for (const src of candidates) {
        try {
          const res = await fetch(src, { method: 'HEAD' });
          if (res.ok) {
            const ct = res.headers.get('content-type') || '';
            if (ct.startsWith('image/')) {
              setPortraitUrlState(src);
              setIsCustom(true);
              return;
            }
          }
        } catch {
          // ignore
        }
      }
    };
    checkPublicImages();
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
