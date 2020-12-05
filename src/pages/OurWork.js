import styled from 'styled-components';
import {Link} from 'react-router-dom';

import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

//animation imports
import {motion} from 'framer-motion';
import {
  fade,
  pageAnimation,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from '../animation';

const OurWork = () => {
  return (
    <StyledWork
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{background: '#fff'}}
    >
      <motion.div variants={sliderContainer}>
        <StyledFrame1 variants={slider}></StyledFrame1>
        <StyledFrame2 variants={slider}></StyledFrame2>
        <StyledFrame3 variants={slider}></StyledFrame3>
        <StyledFrame4 variants={slider}></StyledFrame4>
      </motion.div>

      <StyledMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className='line'></motion.div>
        <Link to='/work/the-athlete'>
          <StyledHideImgOverflow>
            <motion.img variants={photoAnimation} src={athlete} alt='athlete' />
          </StyledHideImgOverflow>
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
    background: #23d997;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;

const StyledHideImgOverflow = styled.div`
  overflow: hidden;
`;

//FRAME ANIMATION -------------------------------------------
const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const StyledFrame2 = styled(StyledFrame1)`
  background: #ff8efb;
`;

const StyledFrame3 = styled(StyledFrame1)`
  background: #8ed2ff;
`;

const StyledFrame4 = styled(StyledFrame1)`
  background: #8effa0;
`;

export default OurWork;
