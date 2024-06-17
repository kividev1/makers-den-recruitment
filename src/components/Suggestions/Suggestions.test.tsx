import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Suggestions, { SuggestionsProps } from '../Suggestions';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

const mockUseKeyboardSelect = jest.fn();
const mockUseUpDownArrowNav = jest.fn();

jest.mock('hooks', () => ({
  useKeyboardSelect: jest.fn((activeIndex, onSelect) =>
    mockUseKeyboardSelect(activeIndex, onSelect)
  ),
  useUpDownArrowNav: jest.fn(
    (activeIndex, handleKeyboardSelection, suggestions) =>
      mockUseUpDownArrowNav(activeIndex, handleKeyboardSelection, suggestions)
  )
}));

jest.mock('copies', () => ({
  search: {
    'searchbox.noResults': 'No results found'
  }
}));

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Suggestions Component', () => {
  const defaultProps: SuggestionsProps = {
    className: 'test-class',
    suggestions: [
      { name: 'Suggestion 1', type: 'Type A' },
      { name: 'Suggestion 2', type: 'Type B' }
    ],
    isLoading: false,
    showSuggestions: true,
    activeIndex: -1,
    onChangeActive: jest.fn(),
    onSelect: jest.fn()
  };

  it('renders the suggestions component with correct props', () => {
    renderWithTheme(<Suggestions {...defaultProps} />);

    const suggestionElements = screen.getAllByRole('option');
    expect(suggestionElements).toHaveLength(2);
    expect(suggestionElements[0]).toHaveTextContent('Suggestion 1');
    expect(suggestionElements[1]).toHaveTextContent('Suggestion 2');
  });

  it('calls onChangeActive prop when a suggestion is hovered over', () => {
    renderWithTheme(<Suggestions {...defaultProps} />);

    const suggestionElements = screen.getAllByRole('option');
    fireEvent.mouseEnter(suggestionElements[1]);

    expect(defaultProps.onChangeActive).toHaveBeenCalledWith(1);
  });

  it('calls onSelect prop when a suggestion is clicked', () => {
    renderWithTheme(<Suggestions {...defaultProps} />);

    const suggestionElements = screen.getAllByRole('option');
    fireEvent.mouseDown(suggestionElements[1]);

    expect(defaultProps.onSelect).toHaveBeenCalledWith(1);
  });

  it('displays the loading spinner when isLoading is true', () => {
    renderWithTheme(<Suggestions {...defaultProps} isLoading={true} />);

    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toBeInTheDocument();
  });

  it('displays no results message when there are no suggestions', () => {
    renderWithTheme(<Suggestions {...defaultProps} suggestions={[]} />);

    const messageElement = screen.getByText('No results found');
    expect(messageElement).toBeInTheDocument();
  });
});
