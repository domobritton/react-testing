import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import MovieDetail from '../MovieDetail';

global.fetch = require('jest-fetch-mock');

// change afterEach to clear the console.error after its tested and before next test
afterEach(() => {
    cleanup();
    console.error.mockClear();
});

const match = {
    params: {
        id: '1234',
    },
}

const movie = {
    id: 'hi',
    title: 'Level Up',
}

console.error = jest.fn();

// testing with mock data for mock API call
test('<MovieDetail />', async () => {
    fetch.mockResponseOnce(JSON.stringify(movie));

    const { getByTestId } = render(<MovieDetail match={match}/>);
    await waitForElement(() => getByTestId('movie-title'));

    expect(getByTestId('movie-title').textContent).toBe(movie.title);
});
