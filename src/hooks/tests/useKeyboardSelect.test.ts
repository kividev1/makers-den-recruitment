import { renderHook, fireEvent } from '@testing-library/react';
import { useKeyboardSelect } from '../useKeyboardSelect';
const mockHandleSelectItem = jest.fn();

describe('useKayboardSelect hook', () => {
  it('should handle Enter key event', () => {
    renderHook(() => useKeyboardSelect(2, mockHandleSelectItem));

    fireEvent.keyDown(window, { key: 'Enter' });

    expect(mockHandleSelectItem).toHaveBeenCalledWith(2);
  });
});
