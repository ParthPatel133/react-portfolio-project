import styled from 'styled-components';
import {useState, useEffect, Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import {MovieState} from '../movieState';

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;

  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((item) => item.url === url);
    setMovie(...currentMovie);
  }, [movies, url]);

  return (
    <Fragment>
      {movie && (
        <StyledDetails>
          <StyledHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt='movie' />
          </StyledHeadline>
          <StyledAwards>
            {movie.awards.map((item, index) => (
              <Award
                title={item.title}
                description={item.description}
                key={index}
              />
            ))}
          </StyledAwards>
          <StyledImageDisplay>
            <img src={movie.secondaryImg} alt='Movie' />
          </StyledImageDisplay>
        </StyledDetails>
      )}
    </Fragment>
  );
};

//Award COMPONENT to iterate over movie.awards
const Award = ({description, title}) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className='line'></div>
      <p>{description}</p>
    </StyledAward>
  );
};

const StyledDetails = styled.div`
  color: white;
`;

const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  min-height: 60vh;
  display: flex;
  margin: 5rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledAward = styled.div`
  padding: 3rem;
  h3 {
    font-size: 1.2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.3rem;
    margin: 0.5rem 0rem;
  }
  p {
    padding: 1.5rem 0rem;
  }
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;
