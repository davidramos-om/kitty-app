import { ReactNode, createContext } from 'react';

import useLocalStorage from 'src/hooks/useLocalStorage';
import getColorPresets, { colorPresets, defaultPreset } from 'src/utils/getColorPresets';
import { defaultSettings } from 'src/config';
import { ThemeMode, ThemeLayout, ThemeDirection, ThemeColorPresets, SettingsContextProps } from 'src/components/settings/type';


const initialState: SettingsContextProps = {
  ...defaultSettings,
  onChangeMode: () => { },
  onToggleMode: () => { },
  onChangeDirection: () => { },
  onChangeColor: () => { },
  onToggleStretch: () => { },
  onChangeLayout: () => { },
  onResetSetting: () => { },
  onChangeLanguage: (lang: string) => { },
  setColor: defaultPreset,
  colorOption: [],
};

const SettingsContext = createContext(initialState);

type SettingsProviderProps = {
  children: ReactNode;
};

function SettingsProvider({ children }: SettingsProviderProps) {

  const [ settings, setSettings ] = useLocalStorage('settings', {
    themeMode: initialState.themeMode,
    themeDirection: initialState.themeDirection,
    themeColorPresets: initialState.themeColorPresets,
    themeStretch: initialState.themeStretch,
    themeLayout: initialState.themeLayout,
    language: initialState.language,
  });

  const onChangeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeMode: (event.target as HTMLInputElement).value as ThemeMode,
    });
  };

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
    });
  };

  const onChangeDirection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeDirection: (event.target as HTMLInputElement).value as ThemeDirection,
    });
  };

  const onChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeColorPresets: (event.target as HTMLInputElement).value as ThemeColorPresets,
    });
  };

  const onChangeLayout = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeLayout: (event.target as HTMLInputElement).value as ThemeLayout,
    });
  };

  const onToggleStretch = () => {
    setSettings({
      ...settings,
      themeStretch: !settings.themeStretch,
    });
  };

  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
      themeLayout: initialState.themeLayout,
      themeStretch: initialState.themeStretch,
      themeDirection: initialState.themeDirection,
      themeColorPresets: initialState.themeColorPresets,
    });
  };

  const handleChangeLanguage = (lang: string) => {
    setSettings({
      ...settings,
      language: lang
    });
  }

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        // Mode
        onChangeMode,
        onToggleMode,
        // Direction
        onChangeDirection,
        // Color
        onChangeColor,
        setColor: getColorPresets(settings.themeColorPresets),
        colorOption: colorPresets.map((color) => ({
          name: color.name,
          value: color.main,
        })),
        // Stretch
        onToggleStretch,
        // Navbar Horizontal
        onChangeLayout,
        // Reset Setting
        onResetSetting,
        onChangeLanguage: handleChangeLanguage,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
