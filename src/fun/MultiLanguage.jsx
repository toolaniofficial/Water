import { useTranslation } from "react-i18next";

export default function MultiLanguage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="p-6 bg-green-400">
      <button onClick={() => i18n.changeLanguage('en')} className="mr-2">English</button>
      <button onClick={() => i18n.changeLanguage('fr')}>French</button>

      <h1 className="mt-6">{t('welcome')}</h1>
    </div>
  );
}
