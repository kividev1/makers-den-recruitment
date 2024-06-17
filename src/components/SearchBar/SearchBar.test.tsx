import React from 'react';
import { render, fireEvent, act, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

jest.mock('hooks', () => ({
  useGithubSearch: () => ({
    fetchReposAndUsersByQuery: jest.fn(),
    error: null,
    isLoading: false
  }),
  useUpDownArrowNav: jest.fn(),
  useKeyboardSelect: jest.fn()
}));

jest.mock('utils/api', () => ({
  fetchRepositories: jest.fn(),
  fetchUsers: jest.fn()
}));

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

const mockSuggestions = [
  { name: 'react', url: 'https://github.com/react' },
  { name: 'react-redux', url: 'https://github.com/react-redux' }
];

describe('SearchBar component', () => {
  beforeEach(() => {
    const mockFetchReposAndUsersByQuery = jest
      .fn()
      .mockResolvedValue(mockSuggestions);
    jest.spyOn(require('hooks'), 'useGithubSearch').mockImplementation(() => ({
      fetchReposAndUsersByQuery: mockFetchReposAndUsersByQuery,
      error: null,
      isLoading: false
    }));
  });

  it('should update input value and show suggestions', async () => {
    const { getByTestId } = renderWithTheme(<SearchBar />);

    // Simulate user input in search input
    const searchInput = screen.getByRole('combobox');
    fireEvent.change(searchInput, { target: { value: 'react' } });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
    });

    // Check if suggestions are shown
    const suggestionsList = getByTestId('suggestions');
    expect(suggestionsList).toBeInTheDocument();

    // Optionally, you can check the number of suggestions rendered
    const suggestionsItems = suggestionsList.querySelectorAll('li');
    expect(suggestionsItems.length).toBeGreaterThan(0);
  });

  it('should handle selecting a suggestion', async () => {
    const originalOpen = window.open;
    const mockOpen = jest.fn();
    window.open = mockOpen;

    const { getByTestId } = renderWithTheme(<SearchBar />);

    // Simulate user input in search input
    const searchInput = screen.getByRole('combobox');
    fireEvent.change(searchInput, { target: { value: 'react' } });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
    });

    // Select a suggestion
    const firstSuggestion = getByTestId('react');
    fireEvent.mouseDown(firstSuggestion);

    expect(mockOpen).toHaveBeenCalledWith(mockSuggestions[0].url, '_blank');

    window.open = originalOpen;
  });
});
