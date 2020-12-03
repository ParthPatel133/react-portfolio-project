import styled from 'styled-components';

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a href='#'>Click</a>
      </h1>
      <ul>
        <li>
          <a href='#'>About Us</a>
        </li>
        <li>
          <a href='#'>Our Work</a>
        </li>
        <li>
          <a href='#'>Contact Us</a>
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
`;

export default Nav;
