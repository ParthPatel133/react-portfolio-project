import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <StyledNav>
      <h1 id='logo'>
        <Link to='/'>Click</Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>About Us</Link>
        </li>
        <li>
          <Link to='/work'>Our Work</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
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

export default Nav;
