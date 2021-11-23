import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cards = () => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Tytuł
                </Typography>
                <Typography variant="body2" color="text.secondary">
                opis
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" size="small">Otwórz</Button>
                <Button variant="outlined" size="small">Github</Button>
            </CardActions>
        </Card>
    );
}

export default Cards;