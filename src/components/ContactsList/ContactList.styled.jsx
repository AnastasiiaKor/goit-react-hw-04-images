import styled from '@emotion/styled';
export const List = styled.ul`
  list-style: none;
  margin-top: 40px;
  padding: 0;
`;
export const Item = styled.li`
  border: 1px solid black;
  width: 400px;
  border-radius: 10px;
  padding: 5px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
