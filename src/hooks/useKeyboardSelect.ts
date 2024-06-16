import { useEffect } from 'react';

export const useKeyboardSelect = (
  activeItemIndex: number,
  onSelect: (index: number) => void
) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSelect(activeItemIndex);
    }
  };
};
