import { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';

class ClassTranslation extends Component {
  render() {
    const { t } = this.props;
    return (
      <Fragment>
        <h3>{t('description.part1')}</h3>
      </Fragment>
    );
  }
}

export default withTranslation()(ClassTranslation);
