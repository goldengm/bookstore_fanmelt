import React from 'react'
import { FlatAppBar, LogoContainer,  Logo} from './Styled'
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";


export const NavBar = () => {
    return (
        <FlatAppBar position="fixed">
            <Toolbar>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <Button color="inherit">Signup</Button>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </FlatAppBar>
    )
}
