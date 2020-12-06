import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';

const Nav = () => {
  const {pathname} = useLocation();

  return (
    <StyledNav>
      <h1 id='logo'>
        <Link to='/'>Click</Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>About Us</Link>
          <StyledNavLine
            transition={{duration: 0.75}}
            initial={{width: '0%'}}
            animate={{width: pathname === '/' ? '50%' : '0%'}}
          />
        </li>
        <li>
          <Link to='/work'>Our Work</Link>
          <StyledNavLine
            transition={{duration: 0.75}}
            initial={{width: '0%'}}
            animate={{width: pathname === '/work' ? '50%' : '0%'}}
          />
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
          <StyledNavLine
            transition={{duration: 0.75}}
            initial={{width: '0%'}}
            animate={{width: pathname === '/contact' ? '50%' : '0%'}}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 5rem;
      position: relative;
    }
  }
  h1 {
    a {
      font-family: 'Lobster', cursive;
      font-weight: lighter;
      font-size: 2rem;
      letter-spacing: 0.2rem;
    }
  }
  @media (max-width: 565px) {
    flex-direction: column;
    padding: 0;
    #logo {
      display: inline-block;
      margin-top: 2rem;
    }
    ul {
      justify-content: space-around;
      padding: 2rem;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const StyledNavLine = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 5%;
  position: absolute;
  bottom: -80%;
  left: 50%;
  @media (max-width: 565px) {
    left: 0%;
    width: 100% !important;
  }
`;

export default Nav;
