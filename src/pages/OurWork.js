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
import {useScroll} from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

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

      <StyledMovie
        ref={element}
        variants={fade}
        animate={controls}
        initial='hidden'
      >
        <h2>The racer</h2>
        <motion.div variants={lineAnimation} className='line'></motion.div>
        <Link to='/work/the-racer'>
          <img src={theracer} alt='theracer' />
        </Link>
      </StyledMovie>

      <StyledMovie
        variants={fade}
        ref={element2}
        animate={controls2}
        initial='hidden'
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnimation} className='line'></motion.div>
        <Link to='/work/good-times'>
          <img src={goodtimes} alt='goodtimes' />
        </Link>
      </StyledMovie>
      <ScrollTop />
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
  @media (max-width: 900px) {
    padding: 2rem;
  }
  @media (max-width: 560px) {
    padding: 1rem;
  }
`;

const StyledMovie = styled(motion.div)`
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
    @media (max-width: 560px) {
      height: 70vh;
    }
  }
  @media (max-width: 900px) {
    padding-bottom: 2rem;
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
