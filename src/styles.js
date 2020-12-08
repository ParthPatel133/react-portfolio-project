import styled from 'styled-components';
import {motion} from 'framer-motion';

export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 5rem;
  color: white;
  @media (max-width: 900px) {
    /* display: block; */
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
  @media (max-width: 565px) {
    padding: 1rem;
    min-height: auto;
  }
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 900px) {
    padding: 0;
    button {
      margin: 0 0 2rem 0;
    }
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;
