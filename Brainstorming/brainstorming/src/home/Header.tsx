// import buttonOnClick from "./buttonFunction";
import { Link } from "react-router-dom";
import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <img src="https://brainstorming.com/assets/logo.svg"></img>
        <div className="input-div">
          <input className="search-input" placeholder="Search" />
          <span className="search-outline"></span>

          <Link
            to="../search-page/SearchPage"
            className="search-btn"
          />
        </div>
        <div className="buttons-div">
          <button id="btn1" className="login btn">
            Login
          </button>
          <button id="btn2" className="sign-up btn">
            Sign Up
          </button>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
