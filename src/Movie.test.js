import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Movie, { POSTER_PATH } from './Movie';

// change afterEach to clear the console.error after its tested and before next test
afterEach(() => {
    cleanup();
    console.error.mockClear();
});

console.error = jest.fn();
// test if no props are passed into <Movie />
test('<Movie />', () => {
    render(<Movie />);
    expect(console.error).toHaveBeenCalled();
});

const movie = {
    id: 'hi',
    title: 'level up',
    poster_path: 'abcd.jpg'
};

test('<Movie /> with movie', () => {
    const { getByTestId } = render(
        <MemoryRouter>
            <Movie movie={movie} />
        </MemoryRouter>,
    );
    expect(console.error).not.toHaveBeenCalled();
    expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`);
    expect(getByTestId('movie-img').src).toBe(`${POSTER_PATH}${movie.poster_path}`);
});