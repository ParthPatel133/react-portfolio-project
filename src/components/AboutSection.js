import home1 from '../img/home1.png';
import styled from 'styled-components';

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
const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
