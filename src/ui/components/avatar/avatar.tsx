import React from 'react';
import cx from 'classnames';
import { Text } from '../text';
import s from './styles.scss';

export interface AvatarProps {
  className?: string;
  avatar: string;
}

export const Avatar: React.FC<AvatarProps> = ({ className, avatar }: AvatarProps) =>
  avatar ? (
    <img className={cx(s.avatar, className)} src={avatar} alt="avatar" />
  ) : (
    <div className={cx(s.avatar, className)}>
      <Text color={Text.colors.primary} size={Text.sizes.s}>
        LOGO
      </Text>
    </div>
  );
