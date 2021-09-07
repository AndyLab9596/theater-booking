import React from 'react';
import MovieItem from '../MovieItem';
const MovieList = ({ arrMovies }) => {

    return (
        <section>
            <div className="container px-5 py-24 mx-auto">

                <div className="grid grid-cols-4 gap-7">
                    {arrMovies?.map((movie, index) => {
                        return (
                            <MovieItem movie={movie} key={index} />
                        )
                    })}
                </div>
            </div>
        </section>

    );
};

export default MovieList;