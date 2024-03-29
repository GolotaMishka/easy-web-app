import React from 'react';
import cx from 'classnames';
import s from './styles.scss';

import alert from './icons/alert.svg';
import calendar from './icons/calendar.svg';
import check from './icons/check.svg';
import chevronLeft from './icons/chevron-left.svg';
import chevronRight from './icons/chevron-right.svg';
import chevronDown from './icons/chevron-down.svg';
import circleDelete from './icons/circle-delete.svg';
import remove from './icons/delete.svg';
import download from './icons/download.svg';
import edit from './icons/edit.svg';
import listView from './icons/list-view.svg';
import plus from './icons/plus.svg';
import refresh from './icons/refresh.svg';
import transform from './icons/transform.svg';
import close from './icons/close.svg';
import search from './icons/search.svg';
import add from './icons/add.svg';
import threeDots from './icons/three-dots.svg';
import euro from './icons/euro.svg';
import pdf from './icons/pdf.svg';
import list from './icons/list.svg';
import checkGreen from './icons/check-green.svg';
import circlePlus from './icons/circle-plus.svg';
import zoomIn from './icons/zoom-in.svg';
import zoomOut from './icons/zoom-out.svg';
import percent from './icons/percent.svg';
import copyright from './icons/copyright.svg';
import user from './icons/user.svg';
import lock from './icons/lock.svg';
import mail from './icons/mail.svg';
import userCircle from './icons/userCircle.svg';
import power from './icons/power.svg';
import work from './icons/work.svg';
import file from './icons/file.svg';
import book from './icons/book.svg';
import mic from './icons/mic.svg';
import chart from './icons/chart.svg';
import checked from './icons/checked.svg';
import paper from './icons/paper.svg';
import settings from './icons/settings.svg';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  icon: any;
  disabled?: boolean;
  className?: string;
}

interface CompoundedComponent extends React.ForwardRefExoticComponent<IconProps> {
  icons: any;
}

export const Icon = React.forwardRef<any, IconProps>(
  ({ icon, className, disabled, ...props }: IconProps, ref): JSX.Element => {
    return (
      <svg
        {...props}
        className={cx(s.icon, className, disabled && s.iconDisabled)}
        viewBox={icon.viewBox}
        ref={ref}
        {...props}
      >
        <use xlinkHref={`#${icon.id}`} />
      </svg>
    );
  },
) as CompoundedComponent;

Icon.icons = {
  chevronDown,
  chevronLeft,
  chevronRight,
  alert,
  calendar,
  check,
  circleDelete,
  remove,
  download,
  edit,
  listView,
  plus,
  refresh,
  transform,
  close,
  search,
  add,
  threeDots,
  euro,
  pdf,
  list,
  checkGreen,
  circlePlus,
  zoomIn,
  zoomOut,
  percent,
  copyright,
  lock,
  user,
  mail,
  userCircle,
  power,
  work,
  file,
  book,
  mic,
  chart,
  checked,
  paper,
  settings,
};
