import styled from "styled-components";

export const FormList = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 345px;
  height: auto;
  border: 2px solid #000000;

  & input {
    margin-top: 5px;
    margin-bottom: 5px;
    width: 200px;
    border-color: rgba(235, 236, 240);
    text-align: center;
    font-size: 14px;
  }

  & input:hover {
    background-color: rgba(130, 231, 231, 0.4);
  }
  & button {
    width: 150px;
    background-color: #518cfa;
    color: #000000;
    font-size: 12px;
    margin-top: 10px;
    border-radius: 5px;
  }
  & button:hover {
    color: white;
  }
`;
