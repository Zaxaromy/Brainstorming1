import { styled } from "styled-components";

export const StyledScrollbar = styled.div`
  z-index: 0;
  position: fixed;
  margin: 65px 0px 0px 206px;
  border-bottom: 1px solid var(--light);

  .tags-div {
    height: 55px;
    /* width: 100%; */
    overflow: auto;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    button {
      font-size: 12px;
      color: var(--dark);
      border: 1px solid #e1e1f0;
      border-radius: 20px;
      padding: 9px 16px;
      margin: 5px 4px;
      cursor: pointer;
      flex: 0 0 auto;
      flex-basis: 85px;
    }

    .sleep {
      flex-basis: 50px;
      padding: 8px 12px;
      margin: 10px 4px 10px 6px;
    }
  }

  .tags-div::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
