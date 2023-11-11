import React from 'react';

function MoviePoster(props) {
  const { img, title, overview, score, genres, year } = props;
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${img}`}
          alt={title}
          width={264}
          height={397}
        />
        <h2>
          {title} {`(${year})`}
        </h2>
        <p>User Score: {`${score * 10}%`}</p>
        <p>Overview {overview}</p>
        <div>
          Genres{' '}
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MoviePoster;
