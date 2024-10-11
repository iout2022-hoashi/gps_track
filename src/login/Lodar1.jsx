// Loader.jsx
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  loader: {
    position: 'fixed',
    top: 'calc(50% - 40px)',
    left: 'calc(50% - 40px)',
    width: '80px',
    height: '80px',
    boxSizing: 'content-box',
    animation: '$rotate 1s infinite linear',
    borderRadius: '50%',
    border: '8px solid #3498db', // 青色
    borderRightColor: '#e74c3c', // 赤色
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)', // 影
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)',
      borderColor: '#3498db',
    },
    '50%': {
      borderColor: '#8e44ad', // 紫色
    },
    '100%': {
      transform: 'rotate(360deg)',
      borderColor: '#e74c3c',
    },
  },
}));

const Loader = () => {
  const classes = useStyles();
  return <div className={classes.loader}></div>;
};

export default Loader;
