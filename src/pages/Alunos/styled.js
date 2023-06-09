import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlunoContainer = styled.div`
  margin-top: 30px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }
  div + div {
    border-top: 1px solid #a9a9a9;
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  div link {
    align-items: end;
    justify-content: left;
    display: block;
  }
`;

export const NovoAluno = styled(Link)`
  display: block;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  margin-left: 260px;
  align-items: center;
  border-radius: 4px;
  text-align: right;
  background-color: #199319;
  color: white;
  padding: 15px 25px;
  text-decoration: none;
  cursor: pointer;
  border: none;
`;
