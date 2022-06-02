import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeaderDiv = styled.div`
  top: 0;
  width: 100%;
  background-color: pink;
  height: 100px;
  background-color: ${(props) => props.backgroundColor};
`;

//Link 상속
const StyledHeadLink = styled(Link)`
  color: red;
`;

//하나의 컴포넌트를 생성 (파일 하나로!)js에 넣고 css처럼 사용할수 이싸
//styled-component => js+css 파일 관리
const Header = () => {
  return (
    <div>
      <StyledHeaderDiv backgroundColor="lightblue">
        <ul>
          <li>
            <StyledHeadLink to="/">홈</StyledHeadLink>
          </li>
          <li>
            <StyledHeadLink to="/login/10">로그인</StyledHeadLink>
          </li>
        </ul>
      </StyledHeaderDiv>

      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/login/:id" className="nav-link">
                Login
              </Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
