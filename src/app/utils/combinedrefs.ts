import * as React from 'react';

export const useCombinedRefs = (
  ...refs: React.MutableRefObject<HTMLInputElement | null>[]
): React.MutableRefObject<HTMLInputElement | null> => {
  const targetRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    refs.forEach(
      (ref: React.MutableRefObject<HTMLInputElement | null> | ((current: HTMLInputElement | null) => void)) => {
        if (!ref) return;

        if (typeof ref === 'function') {
          ref(targetRef.current);
        } else {
          /* eslint no-param-reassign: 0 */
          ref.current = targetRef.current;
        }
      },
    );
  }, refs);

  return targetRef;
};
