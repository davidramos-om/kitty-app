import { SettingsValueProps } from './components/settings/type';

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 92,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 280,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
};

export const defaultSettings: SettingsValueProps = {
  themeMode: 'dark',
  themeDirection: 'ltr',
  themeColorPresets: 'orange',
  themeLayout: 'horizontal',
  themeStretch: false,
  language: 'en',
};

export const SITE_SETTINGS = {
  ccm_api: String(process.env.REACT_APP_CCM_API || ''),
}