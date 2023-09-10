import Module1 from "./Module1";
import Module2 from "./Module2";
import { StyledMainContent } from "./styles/MainContent.styled";

const MainContent = () => {
  return (
    <>
      <StyledMainContent>
        <Module1></Module1>
        <Module2></Module2>
        <div className="banner">
          <div className="text-div">
            <img
              src="https://brainstorming.com/assets/banner/banner-icon1.png"
              className="banner-img"
            />
            <span className="banner-text">
              A place where we help solve each others problems and improve upon each others ideas.
            </span>
          </div>
          <button className="banner-btn">Contribute</button>
        </div>
      </StyledMainContent>
    </>
  );
};

export default MainContent;
