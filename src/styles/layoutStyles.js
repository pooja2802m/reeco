import styled from "styled-components";

export const Header = styled.header`
  background-color: #004d25;
  padding: 0 10%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const IconName = styled.span`
  font-size: 24px;
  font-weight: 600;
  font-family: Arial;
  color: #ffffff;
`;

export const NavContainer = styled.ul`
  display: flex;
  gap: 50px;
  color: #d3d3d3;
`;
