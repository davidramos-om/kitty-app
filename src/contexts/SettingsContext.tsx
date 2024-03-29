import {
  useMemo,
  useState,
  ReactNode,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from 'react';

import localStorageAvailable from 'src/utils/localStorageAvailable';

import { defaultSettings } from 'src/components/settings/config-setting';
import { defaultPreset, getPresets, presetsOption } from 'src/components/settings/presets';
import {
  ThemeModeValue,
  ThemeLayoutValue,
  ThemeStretchValue,
  ThemeContrastValue,
  ThemeDirectionValue,
  SettingsContextProps,
  ThemeColorPresetsValue,
} from 'src/components/settings/types';
import { useTranslation } from "react-i18next";


const initialState: SettingsContextProps = {
  ...defaultSettings,
  // Mode
  onToggleMode: () => { },
  onChangeMode: () => { },
  // Direction
  onToggleDirection: () => { },
  onChangeDirection: () => { },
  onChangeDirectionByLang: () => { },
  // Layout
  onToggleLayout: () => { },
  onChangeLayout: () => { },
  // Contrast
  onToggleContrast: () => { },
  onChangeContrast: () => { },
  // Color
  onChangeColorPresets: () => { },
  presetsColor: defaultPreset,
  presetsOption: [],
  // Stretch
  onToggleStretch: () => { },
  // Reset
  onResetSetting: () => { },
  onChangeLanguage: (newLang: string) => { },
};

export const SettingsContext = createContext(initialState);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context) throw new Error('useSettingsContext must be use inside SettingsProvider');

  return context;
};


type SettingsProviderProps = {
  children: ReactNode;
};

export function SettingsProvider({ children }: SettingsProviderProps) {

  const { i18n } = useTranslation();
  const [ themeMode, setThemeMode ] = useState(defaultSettings.themeMode);
  const [ themeLayout, setThemeLayout ] = useState(defaultSettings.themeLayout);
  const [ themeStretch, setThemeStretch ] = useState(defaultSettings.themeStretch);
  const [ themeContrast, setThemeContrast ] = useState(defaultSettings.themeContrast);
  const [ themeDirection, setThemeDirection ] = useState(defaultSettings.themeDirection);
  const [ themeColorPresets, setThemeColorPresets ] = useState(defaultSettings.themeColorPresets);

  const storageAvailable = localStorageAvailable();

  const langStorage = storageAvailable ? localStorage.getItem('i18nextLng') : '';

  const isArabic = langStorage === 'ar';

  useEffect(() => {
    if (isArabic) {
      onChangeDirectionByLang('ar');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ isArabic ]);

  useEffect(() => {
    if (storageAvailable) {
      const mode = getCookie('themeMode') || defaultSettings.themeMode;
      const layout = getCookie('themeLayout') || defaultSettings.themeLayout;
      const stretch = getCookie('themeStretch') || defaultSettings.themeStretch;
      const contrast = getCookie('themeContrast') || defaultSettings.themeContrast;
      const direction = getCookie('themeDirection') || defaultSettings.themeDirection;
      const colorPresets = getCookie('themeColorPresets') || defaultSettings.themeColorPresets;

      setThemeMode(mode as ThemeModeValue);
      setThemeLayout(layout as ThemeLayoutValue);
      setThemeStretch(stretch as ThemeStretchValue);
      setThemeContrast(contrast as ThemeContrastValue);
      setThemeDirection(direction as ThemeDirectionValue);
      setThemeColorPresets(colorPresets as ThemeColorPresetsValue);
    }
  }, [ storageAvailable ]);


  const onToggleMode = useCallback(() => {
    const value = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(value);
    setCookie('themeMode', value);
  }, [ themeMode ]);

  const onChangeMode = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeModeValue;
    setThemeMode(value);
    setCookie('themeMode', value);
  }, []);


  const onToggleDirection = useCallback(() => {
    const value = themeDirection === 'rtl' ? 'ltr' : 'rtl';
    setThemeDirection(value);
    setCookie('themeDirection', value);
  }, [ themeDirection ]);

  const onChangeDirection = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeDirectionValue;
    setThemeDirection(value);
    setCookie('themeDirection', value);
  }, []);

  const onChangeDirectionByLang = useCallback((lang: string) => {
    const value = lang === 'ar' ? 'rtl' : 'ltr';
    setThemeDirection(value);
    setCookie('themeDirection', value);
  }, []);


  const onToggleLayout = useCallback(() => {
    const value = themeLayout === 'vertical' ? 'mini' : 'vertical';
    setThemeLayout(value);
    setCookie('themeLayout', value);
  }, [ themeLayout ]);

  const onChangeLayout = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeLayoutValue;
    setThemeLayout(value);
    setCookie('themeLayout', value);
  }, []);

  const onToggleContrast = useCallback(() => {
    const value = themeContrast === 'default' ? 'bold' : 'default';
    setThemeContrast(value);
    setCookie('themeContrast', value);
  }, [ themeContrast ]);

  const onChangeContrast = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeContrastValue;
    setThemeContrast(value);
    setCookie('themeContrast', value);
  }, []);


  const onChangeColorPresets = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeColorPresetsValue;
    setThemeColorPresets(value);
    setCookie('themeColorPresets', value);
  }, []);

  // Stretch
  const onToggleStretch = useCallback(() => {
    const value = !themeStretch;
    setThemeStretch(value);
    setCookie('themeStretch', JSON.stringify(value));
  }, [ themeStretch ]);

  const handleLanguageChange = useCallback((newlang: string) => {
    i18n.changeLanguage(newlang);
  }, [ i18n ]);


  const onResetSetting = useCallback(() => {
    setThemeMode(defaultSettings.themeMode);
    setThemeLayout(defaultSettings.themeLayout);
    setThemeStretch(defaultSettings.themeStretch);
    setThemeContrast(defaultSettings.themeContrast);
    setThemeDirection(defaultSettings.themeDirection);
    setThemeColorPresets(defaultSettings.themeColorPresets);
    removeCookie('themeMode');
    removeCookie('themeLayout');
    removeCookie('themeStretch');
    removeCookie('themeContrast');
    removeCookie('themeDirection');
    removeCookie('themeColorPresets');
  }, []);

  const memoizedValue = useMemo(
    () => ({
      language: (langStorage || 'en') as string,
      themeMode,
      onToggleMode,
      onChangeMode,
      themeDirection,
      onToggleDirection,
      onChangeDirection,
      onChangeDirectionByLang,
      themeLayout,
      onToggleLayout,
      onChangeLayout,
      themeContrast,
      onChangeContrast,
      onToggleContrast,
      themeStretch,
      onToggleStretch,
      themeColorPresets,
      onChangeColorPresets,
      presetsOption,
      presetsColor: getPresets(themeColorPresets),
      onResetSetting,
      onChangeLanguage: handleLanguageChange,
    }),
    [
      langStorage,
      themeMode,
      onChangeMode,
      onToggleMode,
      themeColorPresets,
      onChangeColorPresets,
      onChangeContrast,
      themeDirection,
      onToggleDirection,
      onChangeDirection,
      onChangeDirectionByLang,
      themeLayout,
      onToggleLayout,
      onChangeLayout,
      themeContrast,
      onToggleContrast,
      themeStretch,
      onToggleStretch,
      onResetSetting,
      handleLanguageChange,
    ]
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}


function getCookie(name: string) {
  if (typeof document === 'undefined') {
    throw new Error(
      'getCookie() is not supported on the server. Fallback to a different value when rendering on the server.'
    );
  }

  const value = `; ${document.cookie}`;

  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts[ 1 ].split(';').shift();
  }

  return undefined;
}

function setCookie(name: string, value: string, exdays = 3) {
  const date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

function removeCookie(name: string) {
  document.cookie = `${name}=;path=/;max-age=0`;
}
