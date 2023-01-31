import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {useNavigate} from 'react-router-dom';
import {appPages, countryOptions} from '../../common/constant';
import Select from 'react-select';

const NavBar = ({setCountry})=> {
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [country, setCountry]=useState('')

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (link) => {
        navigate(link)
    };

    const colourStyles = {
        option: styles => ({ ...styles, color: 'black' })
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor:'pointer'
                        }}
                        onClick={()=>navigate('/')}
                    >
                        NEWS API LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {appPages.map((item) => (
                                <MenuItem key={item.link} onClick={() => handleCloseNavMenu(item.link)}>
                                    <Typography textAlign="center">{item.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        onClick={()=>navigate('/')}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor:'pointer'
                        }}
                    >
                        NEWS API LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {appPages.map((item) => (
                            <Button
                                key={item.title}
                                onClick={()=>handleCloseNavMenu(item.link)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                    <form>
                        <label
                            id="aria-label-country"
                            htmlFor="aria-example-input">
                            Select country
                        </label>

                        <Select
                            aria-labelledby="aria-label-country"
                            inputId="aria-example-input"
                            name="country"
                            onChange={value => setCountry(value.value)}
                            defaultValue={countryOptions[0]}
                            options={countryOptions}
                            styles={colourStyles}
                            noOptionsMessage={() => "No countries found"}
                        />

                    </form>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
