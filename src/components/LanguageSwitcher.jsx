import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <select name="Lenguaje" id="">
        <option onClick={() => handleChangeLanguage('es')}>Español</option>
        <option onClick={() => handleChangeLanguage('en')}>English</option>
        <option onClick={() => handleChangeLanguage('ja')}>日本語</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;