import styled from '@emotion/styled';
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 1;
`;
export const ModalEl = styled.div`
  position: absolute;
  padding: 50px;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
`;
