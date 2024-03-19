import React from 'react'
import ModalWrapper from '../components/modalwrapper'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <div>
     <h1>Example App</h1>
      <ModalWrapper>
      <Box >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" >
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </ModalWrapper>

    </div>
  )
}

export default Home
