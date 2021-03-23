import './month-picker.css';
import React, { useRef, useState } from 'react';
import Picker from 'react-month-picker';
import { TextInput, Icon } from 'ui';
import dateFnsFormat from 'date-fns/format';

type MonthPickerProps = {
  name: string;
  value: any;
  setFieldValue: (name: string, value: any) => void;
  subTitle: string;
  error: string;
  className: string;
};

const MonthPicker: React.FC<MonthPickerProps> = ({
  name,
  value,
  setFieldValue,
  subTitle,
  error,
  className,
}: MonthPickerProps) => {
  const monthPickerRef = useRef<any>(null);
  const [pickerValue, setPickerValue] = useState({
    year: value ? new Date(value).getFullYear() : 2020,
    month: value ? new Date(value).getMonth() + 1 : 0,
  });
  const onMonthPickerClick = () => {
    monthPickerRef?.current?.show();
  };
  const onMonthChange = (year, month) => {
    setPickerValue({ year, month: month + 1 });
    const date = new Date(year, month - 1);
    setFieldValue(name, new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12));
  };
  const formatDate = (dateValue) => dateFnsFormat(dateValue instanceof Date ? value : new Date(value), 'MMMM yyyy');
  return (
    <Picker
      lang={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
      years={Array.from(Array(100), (_, i) => i + new Date().getFullYear() - 50)}
      ref={monthPickerRef}
      value={pickerValue}
      onChange={onMonthChange}
    >
      <TextInput
        iconAfter={Icon.icons.calendar}
        className={className}
        error={error}
        subTitle={subTitle}
        value={formatDate(value)}
        onClick={onMonthPickerClick}
      />
    </Picker>
  );
};

export { MonthPicker };
