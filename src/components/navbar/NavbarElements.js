import styled from 'styled-components';

export const Nav = styled.div`
  background: #28313e;
  height: 85px;
  display: flex;
  padding-inline: 2%;
  position: fixed;
  top: 0;
  width: 100%;
  min-width: auto;
  box-shadow: 0 0 3px #000000;
  z-index: 3;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-items: flex-start;
  margin-left: 30px;
  /* Second Nav */
  //margin-right: 24px; 
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.div`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  font-size: x-large;
  cursor: pointer;

  &:hover {
    color: #b2b8bf;
    text-decoration: underline;
  }
`;