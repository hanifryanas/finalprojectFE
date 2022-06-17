import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Avatar, Card } from '@mui/material';
import Typography from '@mui/material/Typography';

import LooksTwoSharpIcon from '@mui/icons-material/LooksTwoSharp';
import Looks3SharpIcon from '@mui/icons-material/Looks3Sharp';
import Looks4SharpIcon from '@mui/icons-material/Looks4Sharp';
import Looks5SharpIcon from '@mui/icons-material/Looks5Sharp';

const InfoBidder = (bidders) =>{
    let dataBidder = []
    let dataPrice = []
    bidders.bidder.map((bidder) => {
        dataBidder.push(bidder["username_bidder"])
        dataPrice.push(bidder["price"])
    })

    return (
        <Card sx={{ width: "360px" }}>
            <List sx={{ bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="2">
                            <LooksTwoSharpIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={dataBidder[1]}
                        secondary={
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="h6"
                                color="text.primary"
                            >
                                {dataPrice[1]}
                            </Typography>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="3">
                            <Looks3SharpIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={dataBidder[2]}
                        secondary={
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="h6"
                                color="text.primary"
                            >
                                {dataPrice[2]}
                            </Typography>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="4">
                            <Looks4SharpIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={dataBidder[3]}
                        secondary={
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="h6"
                                color="text.primary"
                            >
                                {dataPrice[3]}
                            </Typography>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="5">
                            <Looks5SharpIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={dataBidder[4]}
                        secondary={
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="h6"
                                color="text.primary"
                            >
                                {dataPrice[4]}
                            </Typography>
                        }
                    />
                </ListItem>
            </List>
        </Card>
    );
}
export default InfoBidder;