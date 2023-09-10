import { StyledSidebar } from "./styles/Sidebar.styled";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <button className="create">Create new</button>
      <button className="divider top"></button>
      <button className="sidebar-btn everything">Everything</button>
      <button className="sidebar-btn sessions">Sessions</button>
      <button className="sidebar-btn ideas">Ideas</button>
      <button className="divider middle"></button>
      <button className="sidebar-btn profile">My Profile</button>
      <button className="sidebar-btn drafts">My Drafts</button>
      <button className="divider bottom"></button>
      <button className="sidebar-btn guide">Guide</button>
    </StyledSidebar>
  );
};

export default Sidebar;
