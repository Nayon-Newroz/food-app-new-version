import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import homeLogo from "../assets/images/homeLogo.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import youtube from "../assets/images/youtube.png";
import dishIcon from "../assets/images/dishIcon.png";
import reserveIcon from "../assets/images/reserveIcon.png";
import wallet from "../assets/images/wallet.png";
import forwardIcon from "../assets/images/forwardIcon.png";
import GlobalIcon from "../assets/images/GlobalIcon.svg";

import { makeStyles } from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";
import OrderDrawer from "./partial/OrderDrawer";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { CircularProgress } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles((theme) => ({
  h2: {
    fontSize: "24px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "bold",
    margin: 0,
  },
  h3: {
    fontSize: "22px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "bold",
    margin: "0 0 5px 0",
  },
  h4: {
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    margin: "0 0 5px 0",
    color: "#666E7A",
  },
  h5: {
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    margin: 0,
    fontWeight: 500,
    color: "#666E7A",
  },
  h6: {
    fontSize: "13px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
    fontWeight: 400,
  },
  p: {
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
  },

  imageStyle: {
    display: "block",
    margin: "auto",
  },

  iconButtonStyle: {
    ["& .MuiTypography-root"]: {
      color: "#272D2F !important",
      paddingLeft: "4px !important",
      fontSize: "18px !important",
      fontFamily: "'Inter', sans-serif !important",
      fontWeight: "500 !important",
      textAlign: "center",
      // paddingLeft:'22px'

      // [theme.breakpoints.down(380)]: {
      //   fontSize: "15px !important",
      // },
    },
  },

  listItemStyle: {
    border: "1px solid #E2E2E2",
    borderRadius: "25px",
    background: "#F3F3F3",
    cursor: "pointer",
    marginBottom: "12px",

    "&:last-child": {
      marginBottom: "0px",
    },
  },

  listItemAvatarStyle: {
    minWidth: "30px  !important",
    marginRight: "5px",
  },
  customOutline: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#9E9E9E",
      borderRadius: "25px",
    },
  },
  selectStyle: {
    fontSize: "14px !important",
    textAlign:'center !important',
    ["& .MuiSelect-icon"]: {
      right: "7px",
    },
    ["& .MuiOutlinedInput-input"]: {
      padding: "4.5px 14px",
    },
  },
  dotStyle: {
    background: "#272D2F",
    height: "4px",
    width: "4px",
    borderRadius: "50%",
    margin: "0 5px 3px",
    display: "inline-block",
  },
  textFieldStyle: {
    [`& fieldset`]: {
      borderRadius: 25,
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [language, setLanguage] = useState("English");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  return (
    <div>
      <Container
        maxWidth="xs"
        style={{
          padding: "15px 20px 15px 20px",
        }}
      >
        <Box sx={{ maxWidth: 115, margin: "auto" }}>
           
          <FormControl fullWidth size="small" classes={{ root: classes.customOutline }}>
      
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              // label="English"
              onChange={handleChange}
              className={classes.selectStyle}
              // style={{ fontSize: "14px",textAlign:'center' }}
              IconComponent={KeyboardArrowDownIcon}
             
              // startAdornment={<AccountCircle/>}
              startAdornment={<img src={GlobalIcon} alt='' style={{position:'absolute',left:'8px'}}/>}

            >
              <MenuItem value={"English"}>English</MenuItem>
              <MenuItem value={"Bangla"}>Bangla</MenuItem>
              <MenuItem value={"Spanish"}>Spanish</MenuItem>
            </Select>
          </FormControl>
          {/* <div>
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              // startIcon={<KeyboardArrowDownIcon />}
              // endIcon={<KeyboardArrowDownIcon />}
            >
              <KeyboardArrowDownIcon /> Dashboard <KeyboardArrowDownIcon />
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div> */}
        </Box>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          padding: "40px 20px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 className={classes.h2} style={{ fontWeight: 600 }}>
            Welcome to
          </h2>
          <img src={homeLogo} alt="" style={{ margin: "35px 0 25px 0" }} />
          <h3 className={classes.h3}>KFC Banani</h3>
          <h4 className={classes.h4}>Blue Ocean Tower, Banani Dhaka</h4>
          <label className={classes.h5} style={{ color: "#008000" }}>
            Open Now
          </label>{" "}
          <span className={classes.dotStyle}></span>{" "}
          <label className={classes.h5} style={{ fontWeight: 400 }}>
            Closes 11:00 PM
          </label>
        </div>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          padding: "15px 40px ",
        }}
      >
        <List>
          <ListItem
            className={classes.listItemStyle}
            // secondaryAction={<img src={forwardIcon} alt="" />}
          >
            {/* <ListItemAvatar className={classes.listItemAvatarStyle}>
              <img src={dishIcon} alt="" className={classes.imageStyle} />
            </ListItemAvatar> */}
            <ListItemText
              onClick={handleDrawerOpen}
              className={classes.iconButtonStyle}
            >
              Dine In
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.listItemStyle}
            // secondaryAction={<img src={forwardIcon} alt="" />}
          >
            {/* <ListItemAvatar className={classes.listItemAvatarStyle}>
              <img src={reserveIcon} alt="" className={classes.imageStyle} />
            </ListItemAvatar> */}
            <ListItemText className={classes.iconButtonStyle}>
              Pick Up
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.listItemStyle}
            // secondaryAction={<img src={forwardIcon} alt="" />}
          >
            {/* <ListItemAvatar className={classes.listItemAvatarStyle}>
              <img src={wallet} alt="" className={classes.imageStyle} />
            </ListItemAvatar> */}
            <ListItemText className={classes.iconButtonStyle}>
              Pay Bills
            </ListItemText>
          </ListItem>
        </List>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          padding: "15px 40px ",
        }}
      >
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
          <Grid item>
            <img src={facebook} alt="" />
          </Grid>
          <Grid item>
            <img src={instagram} alt="" />
          </Grid>
          <Grid item>
            <img src={youtube} alt="" />
          </Grid>
        </Grid>
      </Container>
      <OrderDrawer drawerOpen={drawerOpen} />
    </div>
  );
};

export default Home;
