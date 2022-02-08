import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 350px;
  display: block;
  margin-left: 5px;
  font-size: 18px;

  & input {
    display: block;
    border-color: rgba(235, 236, 240);
    font-size: 14px;
    margin-top: 5px;
    text-align: center;
  }
  & input:hover {
    background-color: rgba(124, 253, 182, 0.4);
  }
`;
