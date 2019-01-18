import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from './MovieForm';

afterEach(cleanup);

const onSubmit = jest.fn();

test('<MovieForm>', () => {
    const { queryByTestId, getByText, getByLabelText } = render(<MovieForm submitForm={onSubmit} />);
    
    expect(queryByTestId('movie-form')).toBeTruthy();
    
    // might not work
    // getByLabelText('Text').value = 'hello';
    // fireEvent.change(getByLabelText('Text'));

    // nicer way to do it. will work
    fireEvent.change(getByLabelText('Text'), {
        target: { value: 'hello' }
    });

    fireEvent.click(getByText('Submit'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenLastCalledWith({
        text: 'hello',
    });
});

// dont test state, test UI (functions being called with the correct data)