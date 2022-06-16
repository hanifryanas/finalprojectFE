import React, { useState, useEffect } from 'react'
import { Button, Box, Modal, Typography, Divider } from '@mui/material'
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

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUserName] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("username");
        localStorage.removeItem("userId");
        setIsLoggedIn(false);
        setUserName(null);
        handleClose();
    }

    useEffect(() => {
        updateUserStatus();
    }
        , [])

    const updateUserStatus = () => {
        const accessToken = localStorage.getItem('accessToken');
        const getUsername = localStorage.getItem('username');
        if (accessToken) {
            setIsLoggedIn(true);
            setUserName(getUsername);
        } else {
            setIsLoggedIn(false);
        }
    }

    return (
        isLoggedIn ?
            <>
                <div style={{ display: 'flex', alignContent: "space-around", gap: "10px", marginTop: "20px" }}>
                    {/* <Cart></Cart> */}
                    <Button href="/formLelangPage" variant="contained" sx={{ height: "45px" }} size="small">Melelang</Button>
                    <Button onClick={handleOpen} href="#" variant="outlined" sx={{ height: "45px" }}>{username}</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <div>
                                <Typography variant="h5" component="div" sx={{ mb: 1 }}>Hello {username}!</Typography >
                                <Divider sx={{ mb: 2 }} />
                                <Typography variant='h6' component="div" color="gray" sx={{ height: 100 }}>Are you sure want to Exit?</Typography>
                                <div style={{ width: "100%", display: "flex", gap: 4, justifyContent: "flex-end" }}>
                                    <Button variantonClick={handleClose} variant="contained"> No</Button>
                                    <Button onClick={handleLogout} variant="contained">Yes</Button>
                                </div>
                            </div>
                        </Box>
                    </Modal >
                </div >
            </>
            :
            <>
                <div style={{ display: 'flex', alignContent: "space-around", gap: "10px", marginTop: "20px" }}>
                    {/* <Cart></Cart> */}
                    <Button href="/signin" variant="contained" sx={{ height: "45px" }} size="small">Melelang</Button>
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
            </>
    )
}

export default TopRightNavi