import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 120px;
  padding: 10px;
  border-radius: 10px;
  font-weight: 600;

  background-color: #fff;
  color: black;
  margin-top: 20px;
  margin-bottom: 20px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    opacity: 1;
    color: #273940;
  }
`;
