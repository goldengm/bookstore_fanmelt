import styled from 'styled-components'
import AppBar from "@material-ui/core/AppBar/AppBar";

export const FlatAppBar = styled(AppBar)`
  box-shadow: none;
  min-height: 70px;
`;
export const LogoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Logo = styled.img.attrs({ src: "/logo-purple.png" })`
  position: absolute;
	top: 10px;
	left: 10px;
	margin: 0px;
  max-height: 92px;	
`;
