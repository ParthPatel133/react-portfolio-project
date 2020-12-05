import home1 from '../img/home1.png';
import styled from 'styled-components';
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from '../styles';
import {motion} from 'framer-motion';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div className='title'>
          <StyledHide>
            <motion.h2>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>
              your <span>dreams</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>come true</motion.h2>
          </StyledHide>
        </motion.div>
        <p>
          Contact us for make your moment special with photography and
          videography. We have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt='camera man' />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
