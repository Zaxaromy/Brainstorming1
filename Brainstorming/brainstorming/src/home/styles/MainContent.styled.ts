import { styled } from "styled-components";

export const StyledMainContent = styled.div`
  z-index: -1;
  position: fixed;
  margin: 121.4px 0px 0px 207px;
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: rgb(250, 250, 252);
  overflow: auto;

  .module1 {
    margin: 27px 0px 0px 40px;
  }
  
  .module2 {
    margin: 22px 0px 0px 37px;
  }

  .Module1 {
    display: flex;
    margin: 10px 0px 20px 25px;
  }

  .Module2 {
    display: flex;
    margin: 10px 0px 20px 25px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding: 15px 16px 0px 16px;
  }

  .container-other {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding: 15px 16px 0px 16px;
  }

  .name-div {
    font-size: 13px;
    width: 100%;
    display: flex;
    padding-bottom: 8px;
  }

  .idea {
    background-color: rgba(255, 206, 65, 0.24);
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 10px;
    color: var(--dark);
    margin-right: 5px;
  }

  .name-span {
    padding-top: 2px;
    color: var(--main);
  }

  .name {
    padding: 2px;
  }

  .name:hover {
    background-color: var(--light);
    border-radius: 3px;
    cursor: pointer;
  }

  .secondary-color {
    color: var(--light);
    filter: brightness(80%);
    padding: 0px 1px 0px;
  }

  .bounty-div {
    display: flex;
    width: 100%;
    padding-bottom: 5px;
  }

  .bounty {
    font-size: 9.5px;
    background-color: var(--yellow);
    padding: 5px 15px 5px 14px;
    border-radius: 0px 5px 5px 0px;
  }

  .btc {
    font-weight: bold;
    font-size: 13px;
  }

  .title-div {
    padding-bottom: 5px;
    font-size: 18px;
  }

  .title-div2 {
    padding-bottom: 54px;
    font-size: 18px;
    width: 100%;
  }

  .info-div {
    display: flex;
    width: 100%;
    color: var(--gray);
    margin-top: 5px;
  }

  .dot {
    border-radius: 100%;
    width: 4px;
    height: 4px;
    padding: 0px;
    background-color: var(--light);
    margin: 7px 0px 0px 6px;
    cursor: default;
  }

  .time {
    font-size: 13px;
    padding-top: 1.5px;
    margin-left: 7px;
  }

  .tag-div {
    display: flex;
    width: 100%;
  }

  .tag {
    color: var(--gray);
    padding: 5px 10px;
    border-radius: 20px;
    margin: 15px 7px 0px 0px;
    font-size: 12px;
    border: 0.5px solid #e1e1f0;
  }

  .challenge {
    background-color: rgba(94, 106, 255, 0.24);
    padding: 5px 8px;
    border-radius: 10px;
    font-size: 10px;
    margin-right: 5px;
  }

  .divider {
    cursor: default;
    height: 210px;
    border: 1px solid var(--light);
    border-bottom: 1px solid var(--white);
    border-top: 1px solid var(--white);
    border-left: none;
    background-color: rgb(250, 250, 252);
  }

  .banner {
    background-color: var(--light);
    width: 1600px;
    height: 112px;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  .text-div {
    display: flex;
    align-items: center;
    width: 1000px;
    height: 112px;
  }

  .banner-img {
    padding: 20px 20px;
    height: 75px;
    user-select: none;
  }

  .banner-text {
    font-size: 25px;
    color: var(--dark);
    filter: brightness(50%);
  }

  .banner-btn {
    background-color: var(--main);
    color: var(--white);
    padding: 17px 65px;
    margin-right: 20px;
    font-size: 16px;
    border-radius: 10px;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;
