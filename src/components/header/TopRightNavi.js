import React from 'react'
import { Button, Box, Typography, Modal } from '@mui/material'
import Cart from './Cart'
import SignInForm from '../form/SignInForm'

const TopRightNavi = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
        <div style={{ display: 'flex', alignContent: "space-around", gap: "10px", marginTop: "20px" }}>

            <Cart></Cart>
            <Button href="/formLelangPage" variant="contained" sx={{ height: "45px" }} size="small">Melelang</Button>
            <Button onClick={handleOpen} href="#" variant="outlined" sx={{ height: "45px" }}>Login / Sign Up</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <SignInForm />
                </Box>
            </Modal>


        </div>
    )
}

export default TopRightNavi