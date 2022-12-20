import App from './src/App';
import { AppIcon } from './icon';

const defaultLanguage = 'en';
const localizedAppName = {
  en: 'INFORMATION',
};

interface Settings {
  language: 'en';
}

export const path = '/npwd_qb_info';
export default (settings: Settings) => ({
  id: 'INFORMATION',
  path,
  nameLocale: localizedAppName[settings?.language ?? defaultLanguage],
  color: '#fff',
  backgroundColor: '#9d00ff',
  icon: AppIcon,
  app: App,
});
