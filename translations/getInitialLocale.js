import { defaultLocale } from './config';
import isLocale from './isLocale';

export default function getInitialLocale() {
  const localSetting = localStorage.getItem('locale');
  if (localSetting && isLocale(localSetting)) {
    console.log('got local setting...', localSetting);
    return localSetting;
  }

  const [browserSetting] = navigator.language;
  if (isLocale(browserSetting)) {
    console.log('got browser setting...', browserSetting);
    return browserSetting;
  }

  console.log('got default...', defaultLocale);
  return defaultLocale;
}
