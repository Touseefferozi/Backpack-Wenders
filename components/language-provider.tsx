'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { languageOptions, translations, type LanguageCode, type LanguageOption, type Translations } from '@/lib/translations';

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  options: LanguageOption[];
  content: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>('en');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedLanguage = window.localStorage.getItem('preferred-language') as LanguageCode | null;
    const selected = storedLanguage === 'de' ? 'de' : 'en';
    setLanguageState(selected);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem('preferred-language', language);
    const option = languageOptions.find((item) => item.code === language);
    document.documentElement.lang = option?.htmlLang ?? 'en';
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: setLanguageState,
      options: languageOptions,
      content: translations[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}