import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

import styled from 'styled-components';
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from '../styles';
import {scrollShow} from '../animation';
import {useScroll} from './useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <div>
      <StyledServices
        variants={scrollShow}
        ref={element}
        animate={controls}
        initial='hidden'
      >
        <StyledDescription>
          <h2>
            High <span>quality</span> services
          </h2>
          <StyledCards>
            <StyledCard>
              <div className='icon'>
                <img src={clock} alt='clock-icon' />
                <h3>Efficient</h3>
              </div>
              <p>Your project will done efficiently.</p>
            </StyledCard>
            <StyledCard>
              <div className='icon'>
                <img src={teamwork} alt='teamwork-icon' />
                <h3>Teamwork</h3>
              </div>
              <p>Experienced Team</p>
            </StyledCard>
            <StyledCard>
              <div className='icon'>
                <img src={diaphragm} alt='diaphragm-icon' />
                <h3>Diaphragm</h3>
              </div>
              <p>Your project will done efficiently.</p>
            </StyledCard>
            <StyledCard>
              <div className='icon'>
                <img src={money} alt='money-icon' />
                <h3>Affordable</h3>
              </div>
              <p>Affordable price</p>
            </StyledCard>
          </StyledCards>
        </StyledDescription>
        <StyledImage>
          <img src={home2} alt='video filming' />
        </StyledImage>
      </StyledServices>
    </div>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 0.5rem;
      border-radius: 0.5rem;
    }
  }
`;

export default ServicesSection;
