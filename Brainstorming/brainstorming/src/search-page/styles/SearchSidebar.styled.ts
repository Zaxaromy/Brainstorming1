import { styled } from "styled-components";

export const StyledSidebar = styled.div`
  position: fixed;
  height: 100%;
  border-right: 1px solid var(--light);
  //
  //animation
  //

  a {
    text-decoration: none;
    color: #818181;
  }
  .sidebar-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 230px;
    max-width: 230px;
    min-height: 100%;
    transition:
      max-width 0.5s ease,
      min-width 0.5s ease;
    user-select: none;
    margin-top: 97px;
    overflow: hidden;
  }
  .sidebar-wrapper.is-collapsed {
    width: 94px;
    max-width: 94px;
    min-width: 94px;
    transition:
      max-width 0.5s ease,
      min-width 0.5s ease;
    overflow: hidden;
  }
  .sidebar {
    position: relative;
    min-width: 197px;
    max-width: 197px;
    width: 230px;
    min-height: 100%;
    transition:
      max-width 0.5s ease,
      min-width 0.5s ease;
    padding: 0px 16px;
  }
  .sidebar.is-collapsed {
    width: 48px;
    max-width: 48px;
    min-width: 48px;
    transition:
      max-width 0.5s ease,
      min-width 0.5s ease;
    padding-right: 10px;
  }

  //
  //styling
  //

  //
  //buttons >>>
  //

  .create-wrapper {
    width: 184px;
    max-width: 180px;
    min-width: 180px;
    transition:
      max-width 0.5s ease,
      min-width 0.5s ease;
  }

  .create-collapsed {
    width: 46px;
    max-width: 46px;
    min-width: 46px;
    transition:
      max-width 0.5s ease,
      min-width 0.5s ease;
  }

  .create {
    position: relative;
    text-align: start;
    width: 100%;
    border: none;
    border-radius: 100px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    background-color: var(--white);
    color: var(--main);
    padding: 16px 2px;
    margin-left: 21px;
    margin-top: 5px;
    overflow: hidden;
    cursor: pointer;
  }

  .create:hover {
    background-color: var(--light);
  }

  .create-icon {
    padding-right: 20px;
    padding-left: 17px;
  }

  .create-text-2 {
    padding-left: 3px;
  }

  .sidebar-item {
    padding: 10px;
    background-color: var(--white);
    border: none;
    border-radius: 3px;
    cursor: pointer;
    width: 90%;
    margin: 0px 8px 0px 8px;
    overflow: hidden;
    text-align: start;
  }

  .sidebar-item:hover {
    background-color: var(--light);
  }

  .sidebar-icon {
    margin-right: 25px;
    margin-left: 5px;
  }

  .hidden {
    display: none;
  }

  //
  //divider >>>
  //

  .divider {
    cursor: default;
    width: 90%;
    border: 1px solid var(--light);
    border-bottom: none;
    border-left: none;
    border-right: none;
    background-color: var(--white);
    margin: 0px 30px 0px 8px;
  }

  //
  //collapse-btn >>>
  //

  .collapser {
    top: 56%;
    right: -20px;
    z-index: 2;
    display: flex;
    position: absolute;
    border: none;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: var(--main);
    cursor: pointer;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
  }
`;
