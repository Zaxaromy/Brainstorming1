import { StyledHeader } from "./styles/SearchHeader.styled";
import { Link } from "react-router-dom";

const SearchHeader = () => {
  return (
    <>
      <StyledHeader>
        <Link to="/">
          <img src="https://brainstorming.com/assets/logo.svg"></img>
        </Link>
        <div className="input-div">
          <input className="search-input" placeholder="Search" />
          <span className="search-outline"></span>

          <button className="search-btn" />
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

export default SearchHeader;
