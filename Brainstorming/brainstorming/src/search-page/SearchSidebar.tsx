import sidebarCollapse from "./sidebarCollapse";
import { StyledSidebar } from "./styles/SearchSidebar.styled";

const SearchSidebar = () => {
  return (
    <StyledSidebar>
      <button className="collapser" onClick={sidebarCollapse}></button>
      <div className="sidebar-wrapper is-collapsed" id="wrapper">
        <div className="create-wrapper create-collapsed" id="create-div">
          <div className="create"><i className="create-icon">+</i><span className="create-text">Create<span className="create-text-2">new</span></span></div>
        </div>
        <div className="sidebar is-collapsed" id="sidebar">
          {/* create */}

          {/* divider */}

          <button className="divider top "></button>

          {/* everything */}

          <button className="sidebar-item">
            <i className="sidebar-icon">E</i>
            <a href="#">Everything</a>
          </button>

          {/* sessions */}

          <button className="sidebar-item">
            <i className="sidebar-icon">S</i>
            <a href="#">Sessions</a>
          </button>

          {/* ideas */}

          <button className="sidebar-item">
            <i className="sidebar-icon">I</i>
            <a className="ideas" href="#">
              Ideas
            </a>
          </button>

          {/* divider */}

          <button className="divider middle"></button>

          {/* profile */}

          <button className="sidebar-item">
            <i className="sidebar-icon">P</i>
            <a href="#">
              <span>My</span>Profile
            </a>
          </button>

          {/* drafts */}

          <button className="sidebar-item">
            <i className="sidebar-icon">D</i>
            <a className="drafts" href="#">
              <span>My</span>Drafts
            </a>
          </button>

          {/* divider */}

          <button className="divider bottom"></button>

          {/* guide */}

          <button className="sidebar-item">
            <i className="sidebar-icon">G</i>
            <a className="guide" href="#">
              Guide
            </a>
          </button>

          {/*  */}
        </div>
      </div>
    </StyledSidebar>
  );
};

export default SearchSidebar;
