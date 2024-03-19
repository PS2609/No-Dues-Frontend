import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: 24,
//     padding: theme.spacing(2, 4, 3),
//     outline: 'none',
//     borderRadius: 8,
//   },
// }));

const ModalWrapper = ({ children }) => {
//   const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal open={open} onClose={handleClose}>
        <div >
          {children}
          <Button onClick={handleClose}>Close Modal</Button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalWrapper;
