import { useEffect } from 'react';

export const useUpDownArrowNav = (
  activeItemIndex: number,
  handleChangeActiveItem: (index: number) => void,
  items: any[]
) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      if (activeItemIndex < items.length - 1) {
        handleChangeActiveItem(activeItemIndex + 1);
      }
    } else if (e.key === 'ArrowUp') {
      if (activeItemIndex > 0) {
        handleChangeActiveItem(activeItemIndex - 1);
      }
    }
  };
};
