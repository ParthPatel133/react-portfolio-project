import home1 from '../img/home1.png';
import MediaQuery from 'react-responsive';
import {Link} from 'react-router-dom';

import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from '../styles';
import {motion} from 'framer-motion';
import {titleAnimation, fade, photoAnimation} from '../animation';

import Wave from './Wave';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div className='title'>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>come true</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for make your moment special with photography and
          videography. We have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade} style={{position: 'relative'}}>
          <Link
            to='/contact'
            style={{
              color: 'white',
              textDecoration: 'none',
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              fontSize: '1.1rem',
            }}
          ></Link>
          Contact Us
        </motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img src={home1} alt='camera man' variants={photoAnimation} />
      </StyledImage>
      <MediaQuery minDeviceWidth={0}>
        <Wave />
      </MediaQuery>
    </StyledAbout>
  );
};

export default AboutSection;
