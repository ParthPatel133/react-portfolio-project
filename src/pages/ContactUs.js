import {motion} from 'framer-motion';
import styled from 'styled-components';
import {pageAnimation, titleAnimation, fade} from '../animation';
import ScrollTop from '../components/ScrollTop';

import Particles from 'react-particles-js';

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{position: 'relative'}}
    >
      <StyledParticles
        style={{position: 'absolute', zIndex: -10, width: '100%'}}
      >
        <Particles
          id='particles-js'
          params={{
            particles: {
              number: {
                value: 400,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              color: {
                value: '#fff',
              },
              opacity: {
                value: 0.5,
                anim: {
                  enable: true,
                },
              },
              size: {
                value: 7,
                random: true,
                anim: {
                  enable: true,
                  speed: 3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                speed: 0.2,
              },
            },
          }}
        />
      </StyledParticles>

      <StyledContent variants={fade}>
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
              <input id='submit' type='submit' value='Submit' />
            </form>
          </div>
        </StyledForm>
      </StyledContent>
      <ScrollTop />
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  display: flex;
  flex-direction: column;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 565px) {
    padding: 2rem;
    text-align: center;
  }
`;

const StyledContent = styled(motion.div)`
  padding: 2rem;
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: white;
  z-index: 50;
  @media (max-width: 565px) {
    margin: 2rem;
  }
`;

const StyledForm = styled.div`
  div {
    margin: 1rem 0;
    justify-content: center;
    width: 100%;
    color: white;
  }
  #submit {
    margin-top: 1rem;
    :hover {
      background: #cecdcd;
    }
  }
  input {
    padding: 0.5rem;
    align-self: center;
    width: 45%;
    font-size: 1rem;
    border-radius: 5px;
    :focus {
      outline: none;
    }
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

const StyledParticles = styled.div`
  #particles-js {
    background: radial-gradient(
      circle,
      rgba(193, 196, 209, 1) 0%,
      rgba(3, 3, 29, 1) 100%
    );
    height: 100vh;
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
