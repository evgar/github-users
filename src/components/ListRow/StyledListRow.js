import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledListRow = styled.li`
  width: 30%;
  margin: 10px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #9e9e9e;
  padding: 10px;
  text-decoration: none;
  color: indianred;
`;
export const StyledImage = styled.img`
  width: 100px;
`;
