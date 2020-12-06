import {motion} from 'framer-motion';
import styled from 'styled-components';
import {pageAnimation, titleAnimation} from '../animation';
import ScrollTop from '../components/ScrollTop';

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{background: '#fff'}}
    >
      <StyledTitle>
        <StyledHide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </StyledHide>
      </StyledTitle>

      <div>
        <StyledHide>
          <StyledSocial variants={titleAnimation}>
            <StyledCircle />
            <h2>Send Us A Message</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={titleAnimation}>
            <StyledCircle />
            <h2>Send An Email</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={titleAnimation}>
            <StyledCircle />
            <h2>Social Media</h2>
          </StyledSocial>
        </StyledHide>
      </div>
      <ScrollTop />
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem;
  color: #353535;
  min-height: 90vh;
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
  @media (max-width: 900px) {
    width: 1rem;
    height: 1rem;
  }
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  @media (max-width: 900px) {
    h2 {
      font-size: 1.5rem;
      margin: 1rem;
    }
  }
`;

export default ContactUs;
