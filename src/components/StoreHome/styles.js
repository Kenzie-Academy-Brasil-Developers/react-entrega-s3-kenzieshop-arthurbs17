import styled from "styled-components";

export const Card = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  align-items: center;
  justify-content: center;
`;

export const ContentCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 5px;
  width: 200px;
  height: 300px;
  margin: 5px;
  border: 2px solid #952121;
  border-radius: 5px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;
