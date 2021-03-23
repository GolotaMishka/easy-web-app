import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import cx from 'classnames';
import { Text } from '../text';
import { UnderlinedButton } from '../button';
import s from './styles.scss';

export interface DropzoneProps extends React.HTMLAttributes<HTMLDivElement> {
  accept: string;
  handleDrop: (documents: FileList) => void;
  multiple?: boolean;
  dataCy?: string;
  disabled?: boolean;
}

export const Dropzone: React.FC<DropzoneProps> = ({
  handleDrop,
  multiple = true,
  dataCy,
  disabled,
  ...props
}: DropzoneProps): JSX.Element => {
  const onDrop = React.useCallback((acceptedFiles) => {
    handleDrop(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple });

  return (
    <div className={cx(s.main, disabled && s.mainDisabled)} {...getRootProps()}>
      <div className={cx(s.mainWrapper, isDragActive && s.mainWrapperDrag)}>
        <div className={s.mainWrapperContent}>
          <input data-cy={dataCy} {...getInputProps()} {...props} />
          {isDragActive ? (
            <Text
              className={s.mainWrapperContentTitle}
              weight={Text.weights.semiBold}
              size={Text.sizes.xxl}
              color={Text.colors.primary}
            >
              Drop file to insert
            </Text>
          ) : (
            <Text className={s.mainWrapperContentTitle} weight={Text.weights.semiBold} size={Text.sizes.xxl}>
              Import documents
            </Text>
          )}

          <div className={s.mainWrapperContentDescription}>
            <Text size={Text.sizes.m}>
              Drag and drop here <br />
              or
            </Text>
          </div>

          <UnderlinedButton className={s.mainWrapperContentButton}>browse files</UnderlinedButton>
        </div>
      </div>
    </div>
  );
};
