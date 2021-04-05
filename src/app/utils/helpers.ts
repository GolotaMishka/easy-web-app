import { useEffect } from 'react';

export const useOutsideClicker = (
  ref: React.RefObject<HTMLElement>,
  buttonRef: React.RefObject<HTMLButtonElement>,
  handler: () => void,
): void => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }

      if (buttonRef.current && buttonRef.current.contains(event.target)) {
        return;
      }

      handler();
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [buttonRef]);
};

export const groupByDate = (items) => {
  const result = items.toJS().reduce((groupedItems, item) => {
    const foundGroupIndex = groupedItems.findIndex((group) => group.date === item.date);
    const groupedItemsCopy = groupedItems;
    if (foundGroupIndex !== -1) {
      groupedItemsCopy[foundGroupIndex].tasks.push(item);
      return groupedItemsCopy;
    }
    return [...groupedItems, { date: item.date, tasks: [item] }];
  }, []);

  return result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
