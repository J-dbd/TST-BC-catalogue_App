import styled from "@emotion/styled";

const PrdSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PrdLists = styled.ul`
  display: flex;
  flex-wrap: wrap;

  width: 80%;

  padding: 0;
  list-style: none;

  & > li {
    margin: 5px;
    padding: 10px;
    box-sizing: border-box;

    flex: 1 1 calc(50% - 10px);

    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    cursor: default;
  }

  & > img {
    width: 20%;

    display: block;
    margin: 5px;
    padding: 10px;
    box-sizing: border-box;

    flex: 1 1 calc(50% - 10px);

    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    cursor: default;
  }
`;

export { PrdSection, PrdLists };
