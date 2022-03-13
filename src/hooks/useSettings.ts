import { useContext } from 'react';
import { SettingsContext } from 'src/contexts/SettingsContext';

const useSettings = () => useContext(SettingsContext);
console.info("useSettings", useSettings);

export default useSettings;
