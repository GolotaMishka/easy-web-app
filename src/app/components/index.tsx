import React from 'react';
import { Text } from 'ui';
import s from './styles.scss';

const LegalEntities = () => {
  return (
    <div className={s.page}>
      <Text className={s.pageTitle} size={Text.sizes.xxl} weight={Text.weights.semiBold}>
        HOME
      </Text>
    </div>
  );
};
export default LegalEntities;
