import {
  Nav,
  NavLink,
//   NavMenu,
  NavSearch,
  InputSearch,
  NavBtn,
  Search,
//   NavTheme,
  NavBtnLink,
  NavHidden,
  NavHiddenSearch,
  NavHiddenInput,
} from "./style";
import marvelSvg from "../../assets/marvel.svg";
import {BsStar} from 'react-icons/bs'
import {BsFillMoonFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <img src={marvelSvg} alt="marvelLogo" height="50%" />
      </NavLink>
      {/* <NavMenu>
        <form className="search" onSubmit={onSubmit}>
          <NavSearch mode={theme}>
            <i className="fas fa-search" onClick={onSubmit} />
            <InputSearch>
              <input
                type="text"
                placeholder="Search"
                onChange={(event) => setText(event.target.value)}
                value={text}
              />
            </InputSearch>
          </NavSearch>
        </form>
      </NavMenu> */}
      <NavSearch>
        <Search>
            <AiOutlineSearch />
        </Search>
        <InputSearch placeholder="Busque aqui su personaje de marvel" />
      </NavSearch>
      <NavBtn>
        <NavBtnLink to="/favorites">
            <BsFillMoonFill />
        </NavBtnLink>
        <NavBtnLink to="/favorites">
            <BsStar />
        </NavBtnLink>
      </NavBtn>
      <NavHidden>
        <NavHiddenSearch>
          <NavHiddenInput placeholder="Search" />
        </NavHiddenSearch>
      </NavHidden>
    </Nav>
  );
};

export default Navbar;
