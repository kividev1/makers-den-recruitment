// src/components/Input.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import Input from './Input';
import theme from 'theme';

describe('Input Component', () => {
  const defaultProps = {
    className: 'test-class',
    value: '',
    placeholder: 'Type here...',
    onChange: jest.fn(),
    onFocusChange: jest.fn()
  };

  const renderWithTheme = (component: React.ReactNode) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  it('renders the input component with correct props', () => {
    renderWithTheme(<Input {...defaultProps} />);

    const inputElement = screen.getByRole('combobox');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('test-class');
    expect(inputElement).toHaveAttribute('placeholder', 'Type here...');
    expect(inputElement).toHaveAttribute('aria-autocomplete', 'list');
    expect(inputElement).toHaveAttribute('aria-controls', 'suggestions');
  });

  it('calls onChange prop when the value changes', () => {
    renderWithTheme(<Input {...defaultProps} />);

    const inputElement = screen.getByRole('combobox');
    fireEvent.change(inputElement, { target: { value: 'new value' } });

    expect(defaultProps.onChange).toHaveBeenCalledWith('new value');
  });

  it('calls onFocusChange prop with true when input is focused', () => {
    renderWithTheme(<Input {...defaultProps} />);

    const inputElement = screen.getByRole('combobox');
    fireEvent.focus(inputElement);

    expect(defaultProps.onFocusChange).toHaveBeenCalledWith(true);
  });

  it('calls onFocusChange prop with false when input is blurred', () => {
    renderWithTheme(<Input {...defaultProps} />);

    const inputElement = screen.getByRole('combobox');
    fireEvent.blur(inputElement);

    expect(defaultProps.onFocusChange).toHaveBeenCalledWith(false);
  });

  it('renders the input component with a given value', () => {
    renderWithTheme(<Input {...defaultProps} value="initial value" />);

    const inputElement = screen.getByRole('combobox');

    expect(inputElement).toHaveValue('initial value');
  });
});
