import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;

  justify-content: space-around;
  align-items: center;
  padding: 100px 0;

  left: 0;
  width: 200px;
  height: 100%;

  background-color: #00adb5;

  box-shadow: 3px 0px 5px 2px rgba(0, 0, 0, 0.3);

  a {
    text-decoration: none;
    color: #fff;
    font-size: 32px;
    font-weight: 600;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.15, '#fff')};
    }
  }
`;
