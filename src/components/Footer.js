import React from 'react';
import styled from 'styled-components';

const FooterList = styled.div`
  height: 80px;
  margin-top: auto;
  background-color: #d3d3d3;
`;
const Footer = () => {
  return (
    <FooterList>
      <ul>
        <li>오시는길 : 강남구 선릉</li>
        <li>전화번호 : 02-123-1234</li>
      </ul>
    </FooterList>
  );
};

export default Footer;
