import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: white;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((50vw - 1000px) / 2);
  z-index: 10;
  margin: 4px;
  box-shadow: 0px 15px 10px -15px gray, 0px -15px 10px -15px gray;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: .4rem;
  padding: 0 0.3rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: red;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  opacity: 0.4;
  width: 100vw;
  white-space: nowrap;

  @media screen and (max-width: 510px) {
    display: none;
  }
`;
export const NavSearch = styled.div`
  flex-grow: 1;
  max-width: 80%;
  margin: 0 1vw;
  color: red;
  font-size: 16px;
  opacity: 0.9;
  display: flex;
  align-items: center;
`;

export const Search = styled.h1`
  font-size: 1.4rem;
  margin-top: 1.5rem;
  margin-right: .2rem;
  color: black;
`;

export const InputSearch = styled.input`
  flex-grow: 1;
  font-size: .9rem;
  background-color: white;  
  border: 1px solid gray;
  padding: 10px 5px;
  @media screen and (max-width: 510px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-right: 10px;
`;

export const NavTheme = styled.button`
  color: black;
  border-radius: 2px;
  padding: 10px 12px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  margin-right: 8px;

  &:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid #bdbdbd;
    color: #bdbdbd;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 2px;
  padding: 10px 12px;
  color: #bdbdbd;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: red;
    color: #bdbdbd;
  }

  @media screen and (max-width: 510px) {
    margin-right: 5px;
  }
`;

export const NavHidden = styled.nav`
  display: none;

  @media screen and (max-width: 510px) {
    margin-top: -15px;
    margin: -15px 4px 4px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    padding-top: 5px;
    border-top: 0.5px solid #e0e0e0;
  }
`;

export const NavHiddenSearch = styled.div`
  margin-left: 1vw;
  color: red;
  font-size: 16px;
  opacity: 0.3;
  display: flex;
  align-items: center;
`;

export const NavHiddenInput = styled.input`
  margin-left: 0.5vw;
  opacity: 0.4;
  margin-bottom: 4px;
  background-color: white;
  border-width: 0px;
`;
