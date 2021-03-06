import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Counter from './Counter';


afterEach(cleanup);

test('<Counter />', () => {
    // renders component
    const { debug, getByTestId } = render(<Counter />);
    // Outputs dom as string
    // debug(); 

    // asserts text value 0 is found within a button
    // expect(wrapper.getByText('0').tagName).toBe('BUTTON');

    const counterButton = getByTestId('counter-button');

    // asserts counter-button is a button
    expect(counterButton.tagName).toBe('BUTTON');
    // asserts counter-button starts at 0
    expect(counterButton.textContent).toBe('0');

    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('1');

    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('2');
});