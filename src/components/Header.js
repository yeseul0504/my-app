import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//하나의 컴포넌트를 생성 (파일 하나로!)js에 넣고 css처럼 사용할수 있다.
//styled-component => js+css 파일 관리
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/login/:id" className="nav-link">
              Login
            </Link>
            <Link to="/list" className="nav-link">
              글목록
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
