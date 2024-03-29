import React from 'react';
import cx from 'classnames';
import ReactMaskInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { Text } from 'ui/components/text';
import { Icon } from 'ui/components/icon';
import s from './styles.scss';

const numberMask = createNumberMask({
  prefix: '',
  allowDecimal: true,
  thousandsSeparatorSymbol: '.',
  decimalSymbol: ',',
  decimalLimit: 2,
});
interface InputComponent {
  title?: string;
  subTitle?: string;
  error?: string;
  inputClassName?: string | null;
  wrapperClassName?: string | null;
}

export interface TextInputProps extends InputComponent, React.InputHTMLAttributes<HTMLInputElement> {
  iconBefore?: HTMLObjectElement | JSX.Element;
  iconAfter?: HTMLObjectElement | JSX.Element;
}

export const TextInput: React.FC<TextInputProps> = React.forwardRef<any, TextInputProps>(
  (
    {
      className,
      inputClassName,
      wrapperClassName,
      type = 'text',
      title,
      subTitle,
      disabled,
      error,
      placeholder = 'Placeholder',
      iconBefore,
      iconAfter,
      ...props
    }: TextInputProps,
    ref,
  ) => {
    return (
      <div className={cx(s.wrapper, className)}>
        {title && (
          <Text size={Text.sizes.l} className={s.wrapperTitle} color={Text.colors.text}>
            {title}
          </Text>
        )}
        {subTitle && (
          <Text
            size={Text.sizes.xs}
            className={s.wrapperTitle}
            color={Text.colors.black}
            weight={Text.weights.semiBold}
          >
            {subTitle}
          </Text>
        )}
        <div className={s.wrapperField}>
          <div
            className={cx(
              s.wrapperFieldContent,
              error && s.wrapperFieldContentError,
              disabled && s.wrapperFieldContentDisabled,
              wrapperClassName,
            )}
          >
            {iconBefore && (
              <Icon icon={iconBefore} className={cx(s.wrapperFieldContentIcon, s.wrapperFieldContentIconBefore)} />
            )}
            <input
              type={type}
              aria-label={title || ''}
              className={cx(s.wrapperFieldContentInput, inputClassName)}
              placeholder={placeholder}
              disabled={disabled}
              autoComplete="off"
              ref={ref}
              {...props}
            />
            {iconAfter && (
              <Icon icon={iconAfter} className={cx(s.wrapperFieldContentIcon, s.wrapperFieldContentIconAfter)} />
            )}
          </div>
        </div>

        {error && (
          <Text className={s.inputErrorLabel} color={Text.colors.error}>
            {error}
          </Text>
        )}
      </div>
    );
  },
);

export const MaskedTextInput: React.FC<TextInputProps> = React.forwardRef<any, TextInputProps>(
  (
    {
      className,
      inputClassName,
      wrapperClassName,
      type = 'text',
      title,
      subTitle,
      disabled,
      error,
      placeholder = 'Placeholder',
      iconBefore,
      iconAfter,
      ...props
    }: TextInputProps,
    ref,
  ) => {
    return (
      <div className={cx(s.wrapper, className)}>
        {title && (
          <Text size={Text.sizes.l} className={s.wrapperTitle} color={Text.colors.text}>
            {title}
          </Text>
        )}
        {subTitle && (
          <Text
            size={Text.sizes.xs}
            className={s.wrapperTitle}
            color={Text.colors.black}
            weight={Text.weights.semiBold}
          >
            {subTitle}
          </Text>
        )}
        <div className={s.wrapperField}>
          <div
            className={cx(
              s.wrapperFieldContent,
              error && s.wrapperFieldContentError,
              disabled && s.wrapperFieldContentDisabled,
              wrapperClassName,
            )}
          >
            {iconBefore && (
              <Icon icon={iconBefore} className={cx(s.wrapperFieldContentIcon, s.wrapperFieldContentIconBefore)} />
            )}
            <ReactMaskInput
              {...props}
              type={type}
              aria-label={title || ''}
              className={cx(s.wrapperFieldContentInput, inputClassName)}
              placeholder="0"
              disabled={disabled}
              ref={ref}
              mask={numberMask}
            />
            {iconAfter && (
              <Icon icon={iconAfter} className={cx(s.wrapperFieldContentIcon, s.wrapperFieldContentIconAfter)} />
            )}
          </div>
        </div>

        {error && (
          <Text className={s.inputErrorLabel} color={Text.colors.error}>
            {error}
          </Text>
        )}
      </div>
    );
  },
);
