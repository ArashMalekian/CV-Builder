import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import classes from './MobileMenu.module.scss'
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import ChevronLeftTwoToneIcon from '@mui/icons-material/ChevronLeftTwoTone';
import { Link } from 'react-router-dom';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
}));

const StyledBox = styled(Box)(({ theme }) => ({
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.container} >
    <Root >
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <div className={classes.btnbox} >
            <MenuTwoToneIcon onClick={toggleDrawer(true)} />
      </div>
      <SwipeableDrawer
      
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Puller/>
        {/* <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        > */}
        <div className={classes.styledbox} >
          {/* <Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography> */}
          <div className={classes.dropuptitle} >
            <Link to={props.nextAddress} >
              <Button className={classes.arrowbtn} >
                <ChevronLeftTwoToneIcon />
              </Button>
            </Link>
              <h5 className={classes.pagename} >{props.title}</h5>
              <Button className={classes.arrowbtn} >
                <ChevronRightTwoToneIcon />
              </Button>
          </div>
          
          </div>
        {/* </StyledBox> */}
        
      </SwipeableDrawer>
    </Root>
    </div>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
