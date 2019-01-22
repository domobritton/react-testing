import React from 'react';
import { render, cleanup, waitForElement, queryByTestId } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import MoviesList from './MoviesList';

global.fetch = require('jest-fetch-mock');

// change afterEach to clear the console.error after its tested and before next test
afterEach(() => {
    cleanup();
    console.error.mockClear();
});

console.error = jest.fn();

const movies = {
    results: [
        {
            id: 'hi',
            title: 'Level Up',
            poster_path: 'asdfsdfsdf',
        },
        {
            id: 'hill',
            title: 'Level Up 2',
            poster_path: 'asdfsdfsdfdf',
        },
        {
            id: 'high',
            title: 'Level Up 3',
            poster_path: 'asdfsdfsdfsd',
        },
    ],
}

const movie = movies.results[0];
// testing with mock data for mock API call
test('<MoviesList />', async () => {
    fetch.mockResponseOnce(JSON.stringify(movies));

    const { getByTestId, queryByTestId, getAllByTestId } = render(
        <MemoryRouter>
            <MoviesList />
        </MemoryRouter>
    );
    expect(getByTestId('loading')).toBeTruthy();
    await waitForElement(() => getByTestId('movie-link'));
    expect(queryByTestId('loading')).toBeFalsy();
    expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`);
    expect(getAllByTestId('movie-link').length).toBe(movies.results.length);
});
