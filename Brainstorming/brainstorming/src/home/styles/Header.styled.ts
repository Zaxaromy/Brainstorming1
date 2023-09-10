import { styled } from "styled-components";

export const StyledHeader = styled.div`
  background-color: var(--white);
  filter: brightness(98.75%);
  padding-bottom: 11px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--light);
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 1;

  img {
    width: 170px;
    margin-left: 30px;
    margin-top: 11px;
    cursor: pointer;
    user-select: none;
  }

  .input-div {
    position: relative;
    width: 492px;
    border-color: var(--main);
  }

  .search-input {
    margin-top: 11px;
    width: 490px;
    color: var(--dark);
    padding: 10px 0px 10px 12px;
    border: 1px solid var(--main);
    border-radius: 10px;
    outline: rgba(94, 106, 255, 0.20) 3px solid;
  }

  .search-btn {
    position: absolute;
    right: 10px;
    left: 471px;
    top: 61%;
    padding: 14px;
    transform: translateY(-50%);
    border: none;
    background-color: var(--main);
    border-radius: 5px;
    cursor: pointer;
  }

  input:focus {
    outline: rgba(94, 106, 255, 0.25) 3px solid;
  }

  ::placeholder {
    color: var(--dark);
  }

  .buttons-div {
    display: flex;
    align-self: flex-end;
    padding-right: 10px;
  }

  .btn {
    border: none;
    border-radius: 4px;
    padding: 14px 20px;
    font-size: 14px;
    height: 42px;
    cursor: pointer;
  }

  .login {
    background-color: var(--main);
    color: var(--light);
    margin: 11px 8px 0px 8px;
  }

  .login:hover {
    filter: brightness(108%);
  }

  .login.clicked {
    filter: brightness(150%);
  }

  .sign-up {
    background-color: var(--light);
    filter: brightness(105%);
    color: var(--main);
    display: flex;
    align-self: flex-end;
  }

  .sign-up:hover {
    filter: brightness(101%);
  }

  .sign-up.clicked {
    filter: brightness(109%);
  }
`;
