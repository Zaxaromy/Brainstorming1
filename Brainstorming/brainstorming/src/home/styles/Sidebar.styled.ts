import { styled } from "styled-components";

export const StyledSidebar = styled.div`
  background-color: var(--white);
  border-right: 1px solid var(--light);
  width: 225px;
  height: 100%;
  position: fixed;
  margin-top: 63px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  z-index: 0;

  button {
    cursor: pointer;
  }

  .sidebar-btn {
    border: none;
    border-radius: 3px;
    background-color: var(--white);
    color: var(--dark);
  }

  .sidebar-btn:hover {
    background-color: var(--light);
  }

  .create {
    width: 140px;
    border: none;
    border-radius: 25px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
    background-color: var(--white);
    color: var(--main);
    padding: 15px 0px;
    margin: 41px 0px 10px 0px;
  }

  .create:hover {
    background-color: var(--light);
  }

  .everything {
    padding: 10px 38px;
    margin-top: 13px;
    color: black;
  }

  .sessions {
    padding: 10px 38px;
    margin: 11px 15px 11px 15px;
  }

  .ideas {
    padding: 10px 48px;
    margin-bottom: 11px;
  }

  .profile {
    padding: 10px 39px;
    margin: 16px 0px 14px 0px;
  }

  .drafts {
    padding: 10px 40px;
    margin-bottom: 16px;
  }

  .guide {
    padding: 10px 49px;
    margin-top: 12px;
  }

  .divider {
    cursor: default;
    width: 140px;
    border: 1px solid var(--light);
    border-bottom: none;
    border-left: none;
    border-right: none;
    background-color: var(--white);
  }
`;
