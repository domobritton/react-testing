import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import NewMovie from './NewMovie';

afterEach(cleanup);

test('<NewMovie>', () => {
    const { debug, getByTestId, queryByTestId, container, getByText } = render(<NewMovie />);

    expect(getByTestId('page-title').textContent).toBe('New Movie');
    expect(queryByTestId('movie-form')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(getByText('Submit'));
});

// only use snapshots for components that never really ever change
// we only need to write one assertion for these

// queryByTestId wont break if doesn't find the data-testid
// getByTestId will break if not found