import home1 from '../img/home1.png';
import styled from 'styled-components';
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from '../styles';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className='title'>
          <StyledHide>
            <h1>We work to make</h1>
          </StyledHide>
          <StyledHide>
            <h1>
              your <span>dreams</span>
            </h1>
          </StyledHide>
          <StyledHide>
            <h1>come true</h1>
          </StyledHide>
        </div>
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

//styled-components

export default AboutSection;
