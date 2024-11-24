import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe('Latihan: Counter Component', () => {
  test('Counter Default Value must be 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');

    expect(counterValue).toHaveTextContent('0');
   });

  test('increment works when button clicked', () => {
    render(<Counter/>);
    const incrementButton = screen.getByTestId('increment-button');
    fireEvent.click(incrementButton);
    const counterValue = screen.getByTestId('counter-value');

    expect(counterValue).toHaveTextContent('1');
    });

  test ('decrement works when button clicked', () => {
    render(<Counter/>);
    const decrementButton = screen.getByTestId('decrement-button');
    fireEvent.click(decrementButton);
    const counterValue = screen.getByTestId('counter-value');

    expect(counterValue).toHaveTextContent('-1');
  });

  test ('reset the count using reset button', ()=>{
    render(<Counter/>);
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);

    const counterValue = screen.getByTestId('counter-value');
  
    expect(counterValue).toHaveTextContent('0');
  });

  test('greeting component renders my name', () => {
    render(<Greeting name = "Dianra"/>);
    const greeting = screen.getByTestId('greeting');

    expect(greeting).toHaveTextContent('Hi, Dianra');
  });

  test('greeting component renders my lecturer', () => {
    render (<Greeting name = "Bapak Farid Suryanto"/>);
    const greeting = screen.getByTestId('greeting');

    expect(greeting).toHaveTextContent('Hi, Bapak Farid Suryanto');
  });

  test('triggers alert with correct message when clicked', () => {
    window.alert = jest.fn();
    render(<AlertButton message="Test Alert Message"/>);
    const alertButton = screen.getByTestId('alert-button');
    fireEvent.click(alertButton);

    expect(window.alert).toHaveBeenCalledWith('Test Alert Message');
  });
  
})