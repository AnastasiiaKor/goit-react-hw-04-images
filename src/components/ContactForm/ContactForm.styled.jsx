import styled from '@emotion/styled';
export const Label = styled.label`
  font-weight: 500;
`;
export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 10px;
  width: 100px;
  font-weight: 500;
  font-size: 14px;
  color: green;
  background-color: white;
  border-color: green;
  cursor: pointer;
  border-style: solid;
  :active {
    background-color: green;
    color: white;
  }
`;
