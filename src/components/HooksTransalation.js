import React from 'react';
import { useTranslation } from 'react-i18next';

const HooksTransalation = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <h1>{t('hi')}!</h1>
      <h2> {t('title')}</h2>
    </React.Fragment>
  );
};

export default HooksTransalation;
