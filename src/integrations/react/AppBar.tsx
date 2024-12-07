/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

interface AppBarProps {
    scrolled: boolean;
}

export const QAppBar = qwikify$<AppBarProps>(({scrolled, children}) => {
    return(
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}
            <AppBar
                component="nav"
                id="navigation"
                className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}
            >
                <Toolbar className="navigation-bar">
                    {children}
                </Toolbar>
            </AppBar>
        </Box>
        );
    }, { eagerness: 'hover' });