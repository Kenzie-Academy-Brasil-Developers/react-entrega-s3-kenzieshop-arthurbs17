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
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 5px;
  width: 200px;
  height: 400px;
  margin: 5px;
  border: 2px solid #952121;
`;
