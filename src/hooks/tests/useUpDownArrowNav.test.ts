import { renderHook, fireEvent } from '@testing-library/react';
import { useUpDownArrowNav } from '../useUpDownArrowNav';

const mockHandleChangeActiveItem = jest.fn();

describe('useUpDownArrowNav hook', () => {
  it('should handle ArrowDown key event', () => {
    renderHook(() =>
      useUpDownArrowNav(0, mockHandleChangeActiveItem, ['Item 1', 'Item 2'])
    );

    fireEvent.keyDown(window, { key: 'ArrowDown' });

    expect(mockHandleChangeActiveItem).toHaveBeenCalledWith(1); // Assuming initial activeItemIndex is 0
  });

  it('should handle ArrowUp key event', () => {
    renderHook(() =>
      useUpDownArrowNav(1, mockHandleChangeActiveItem, ['Item 1', 'Item 2'])
    );

    fireEvent.keyDown(window, { key: 'ArrowUp' });

    expect(mockHandleChangeActiveItem).toHaveBeenCalledWith(0); // Assuming initial activeItemIndex is 1
  });
});
