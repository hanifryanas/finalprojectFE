import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
    IconButton,
    Badge,
    styled,
} from '@mui/material'

const Cart = () => {

    const StyledBadge = styled(Badge)(() => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid`,
            padding: '0 4px',
        },
    }));

    return (

        <div>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={2} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </div>
    )
}

export default Cart