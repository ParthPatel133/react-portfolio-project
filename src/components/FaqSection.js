import styled from 'styled-components';
import {StyledAbout} from '../styles';

import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import {scrollShow} from '../animation';
import {useScroll} from '../components/useScroll';

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <StyledFaq
      variants={scrollShow}
      ref={element}
      animate={controls}
      initial='hidden'
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How Do I Start?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              officia?
            </p>
          </div>
        </Toggle>

        <Toggle title='Daily Schedule'>
          <h4></h4>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              officia?
            </p>
          </div>
        </Toggle>

        <Toggle title='Different Payment Method'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              officia?
            </p>
          </div>
        </Toggle>

        <Toggle title='What Products Do You Offer.'>
          <h4></h4>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              officia?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 1rem 0rem;
    width: 100%;
  }
  .question {
    padding: 1rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  @media (max-width: 565px) {
    margin-bottom: 5rem;
  }
`;

export default FaqSection;
