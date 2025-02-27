import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Profile from '@mui/icons-material/AccountBox';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AuthContext } from "../../contexts/authContext";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const context = useContext(AuthContext);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Watchlist", path: "/movies/must_watch" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Trending", path: "/movies/trending/today" },
    { label: "Top Rated", path: "/movies/top_rated" },
    { label: "New", path: "/movies/now_playing" },
    { label: "Popular", path: "/movies/popular" },
  ];

  const tvOptions = [
    { label: "New", path: "/tv/current" },
    { label: "Top Rated", path: "/tv/top_rated" },
    { label: "Popular", path: "/tv/popular" },
  ]

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgb(217,80,17)",
        }}
      >
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6">| Movies |</Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              ))}
            </>
          )}
          <Typography variant="h6">| TV |</Typography>
          <>
            {tvOptions.map((opt) => (
              <Button
                key={opt.label}
                color="inherit"
                onClick={() => handleMenuSelect(opt.path)}
              >
                {opt.label}
              </Button>
            ))}
          </>
          <Button onClick={() => {
            if(context.isAuthenticated) {
              context.signout();
            }
            else{
              navigate("/login");
            }
           } }
            sx={{
              color: "rgb(255,255,255)",
            }}
          >
            <Profile></Profile>
          </Button>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};  

export default SiteHeader;