import styled from 'styled-components';
import {Link} from 'react-router-dom';

import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

const OurWork = () => {
  return (
    <StyledWork
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{background: '#fff'}}
    >
      <StyledMovie>
        <h2>The Athlete</h2>
        <div className='line'></div>
        <Link to='/work/the-athlete'>
          <img src={athlete} alt='athlete' />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>The racer</h2>
        <div className='line'></div>
        <Link to='/work/the-racer'>
          <img src={theracer} alt='theracer' />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>Good Times</h2>
        <div className='line'></div>
        <Link to='/work/good-times'>
          <img src={goodtimes} alt='goodtimes' />
        </Link>
      </StyledMovie>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 5rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const StyledMovie = styled.div`
  padding-bottom: 5rem;
  .line {
    height: 0.3rem;
    background: #cccccc;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;

export default OurWork;
