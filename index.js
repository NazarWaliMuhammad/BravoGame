/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {I18nextProvider} from 'react-i18next';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// Import your translation resources
import translationEN from './locales/en.json';
import translationIT from './locales/it.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: translationEN},
    it: {translation: translationIT},
  },
  lng: 'it', // Set Italian (it) as the default language
  fallbackLng: 'it', // Fallback to Italian if translation is missing
});
const Root = () => (
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
AppRegistry.registerComponent(appName, () => Root);
