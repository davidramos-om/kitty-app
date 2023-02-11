import { useTranslation } from 'react-i18next';

import { useSettingsContext } from 'src/contexts/SettingsContext';
import localStorageAvailable from 'src/utils/localStorageAvailable';
import { allLangs, defaultLang } from 'src/locales/config-lang';

export default function useLocales() {

  const { i18n, t: translate } = useTranslation();
  const { onChangeDirectionByLang } = useSettingsContext();
  const storageAvailable = localStorageAvailable();

  const langStorage = storageAvailable ? localStorage.getItem('i18nextLng') : '';
  const currentLang = allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

  const handleChangeLanguage = (newlang: string) => {
    i18n.changeLanguage(newlang);
    onChangeDirectionByLang(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate: (text: any, options?: any) => translate(text, options),
    currentLang,
    allLangs,
  };
}
