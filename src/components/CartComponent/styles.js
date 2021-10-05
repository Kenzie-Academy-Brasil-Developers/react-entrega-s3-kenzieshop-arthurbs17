import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 20px auto;
  border: 2px solid #cdc5bf;
  border-radius: 5px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  h3 {
    margin-top: 10px;
  }
`;

export const ContentUl = styled.ul`
  list-style: none;
`;

export const ContentLi = styled.li`
  padding: 10px;
  border-bottom: 1px solid #eee9e9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  button {
    background-color: #8b2500;
    color: #fff;
    font-size: 10px;
    padding: 5px;
    border: 1px solid #fff;
    border-radius: 5px;
    :hover {
      background-color: #ff8c00;
      border-color: #ff8c00;
    }
  }
`;
