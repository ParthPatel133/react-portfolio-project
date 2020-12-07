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

      <StyledForm id='particles'>
        <div id='login'>
          <form>
            <div>
              <label htmlFor='name'>Name</label>
              <br />
              <input type='text' placeholder='Enter your name' required />
            </div>
            <div>
              <label htmlFor='email'>Email Id</label>
              <br />
              <input type='email' placeholder='Enter your email' />
            </div>
            <input type='submit' value='Submit' />
          </form>
        </div>
      </StyledForm>

      <ScrollTop />
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 565px) {
    padding: 2rem;
    text-align: center;
  }
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 565px) {
    margin: 2rem;
  }
`;

const StyledForm = styled.div`
  div {
    margin: 1rem 0;
    justify-content: center;
    width: 100%;
  }
  input {
    padding: 0.5rem;
    align-self: center;
    width: 45%;
  }
  @media (max-width: 565px) {
    div {
      margin: 2rem 0;
      text-align: center;
    }
    input {
      width: 80%;
    }
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

// const StyledCircle = styled.div`
//   border-radius: 50%;
//   width: 3rem;
//   height: 3rem;
//   background: #353535;
//   @media (max-width: 900px) {
//     width: 1rem;
//     height: 1rem;
//   }
// `;

// const StyledSocial = styled(motion.div)`
//   display: flex;
//   align-items: center;
//   h2 {
//     margin: 2rem;
//   }
//   @media (max-width: 900px) {
//     h2 {
//       font-size: 1.5rem;
//       margin: 1rem;
//     }
//   }
// `;

export default ContactUs;
