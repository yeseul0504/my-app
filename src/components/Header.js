import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeaderDiv = styled.div`
  top: 0;
  width: 100%;
  background-color: pink;
  height: 100px;
  background-color: ${(props) => props.backgroundColor};
`;

//하나의 컴포넌트를 생성 (파일 하나로!)js에 넣고 css처럼 사용할수 이싸
//styled-component => js+css 파일 관리
const Header = () => {
  return (
    <StyledHeaderDiv backgroundColor="lightblue">
      <ul>
        <Link to="/">홈</Link>
        <Link to="/login/10">로그인</Link>
      </ul>
    </StyledHeaderDiv>
  );
};

export default Header;
