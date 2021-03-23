import React from 'react';
import cx from 'classnames';
import { IImmutableAgreementGroup } from 'data';
import { List } from 'immutable';
import { Text } from '../text';
import { Switcher } from '../switcher';
import { SecondaryButtonLink } from '../button';
import s from './styles.scss';

export interface AgreementCardProps {
  onChange: () => void;
  checked: boolean;
  className?: string;
  title: 'Buildings' | 'Tenants' | 'Credits';
  list: List<IImmutableAgreementGroup>;
  id: string;
  to: string;
  isAuditPeriodClosed: boolean;
}

export const AgreementCard: React.FC<AgreementCardProps> = ({
  checked,
  onChange,
  className,
  title,
  id,
  to,
  list,
  isAuditPeriodClosed,
}: AgreementCardProps) => {
  return (
    <div className={cx(s.card, className)}>
      <div className={cx(s.cardHeader, !checked && s.cardHeaderDisabled)}>
        <Text
          className={cx(s.cardHeaderTitle, !checked && s.cardHeaderTitleDisabled)}
          size={Text.sizes.l}
          weight={Text.weights.semiBold}
        >
          {title}
        </Text>
        <Switcher id={id} onChange={onChange} checked={checked} data-cy="agreementCardSwitcher" />
      </div>
      <div className={cx(s.cardContent, !checked && s.cardContentDisabled)}>
        {checked && (
          <>
            {list?.size > 0 ? (
              <div className={s.cardContentList}>
                {list.map((agreementGroup) => (
                  <div className={s.cardContentListRow} key={agreementGroup.get('id')}>
                    <div className={s.cardContentListRowHeader}>
                      <Text size={Text.sizes.m} color={Text.colors.black} weight={Text.weights.semiBold}>
                        {agreementGroup.get('name')}
                      </Text>
                    </div>
                    <div className={s.cardContentListRowData}>
                      <Text size={Text.sizes.m}>{`${agreementGroup.get('agreementsCount')} agreements`}</Text>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Text className={s.cardContentTitle} color={Text.colors.darkgrey}>
                No active agreements
              </Text>
            )}

            <SecondaryButtonLink to={to} className={s.cardContentButton} data-cy="manageAgreementsLink">
              {isAuditPeriodClosed
                ? `View ${title.toLocaleLowerCase()} & agreements`
                : `Manage ${title.toLocaleLowerCase()} & agreements`}
            </SecondaryButtonLink>
          </>
        )}
      </div>
    </div>
  );
};
