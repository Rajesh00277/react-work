import React from 'react';
import { Translation } from 'react-i18next';
const ComponentTranslation = () => {
  return (
    <Translation>
      {t => {
        return (
          <React.Fragment>
            <h3>{t('quote.best')}</h3>
            <h4> {t('description.part2')}</h4>
          </React.Fragment>
        );
      }}
    </Translation>
  );
};

export default ComponentTranslation;
