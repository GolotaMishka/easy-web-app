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
