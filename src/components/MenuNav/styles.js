import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background-color: #8b0000;
  z-index: 1100;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  justify-content: space-around;
  color: #fff;
`;

export const ButtonNav = styled.button`
  width: 150px;
  height: 50px;
  background-color: #8b0000;
  border: none;
  color: #fff;
  font-family: "Gemunu Libre", sans-serif;
  font-size: 24px;
  cursor: pointer;
  :hover {
    background-color: #8b0030;
  }
`;
