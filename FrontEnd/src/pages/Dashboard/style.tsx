import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 20px;

  header {
    display: flex;
    align-items: center;
    background-color: var(--brand1);
    height: 50px;
  }

  main {
    display: flex;
    align-items: center;
    height: 100vh;
    justify-content: center;
    gap: 20px;
  }

  h2 {
    font-weight: 600;
    margin-left: 20px;
  }
`;

export const Board = styled.ul`
  background-color: var(--brand1);
  height: 62vh;
  width: 50vh;
  list-style: none;
`;

export const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: var(--brand2);

  h2 {
    display: flex;
    align-items: center;
    font-weight: 500;
    margin: 10px;
  }

  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    font-size: 32px;
    color: white;
    font-weight: 900;
    margin: 10px;
    margin-right: 20px;
  }
`;

export const BoardLi = styled.li`
  display: flex;
  align-items: center;
  margin: 20px;
  height: 5vh;
  border-radius: 5px;
  background-color: var(--brand2);

  p {
    font-weight: 600;
    font-size: 25px;
    margin: 10px;
    margin-left: 25px;
  }
`;
