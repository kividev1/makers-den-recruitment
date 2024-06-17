import { useEffect } from 'react';

export const useKeyboardSelect = (
  activeItemIndex: number,
  onSelect: (index: number) => void
) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSelect(activeItemIndex);
    }
  };
};
