import { Favorite, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const Item = () => {
  return (
    <Card sx={{ margin: 3 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "red" }}>S</Avatar>}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title="Shrip and Chorizo Paella"
        subheader="April 13,2023"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://avatars.githubusercontent.com/u/117700630?v=4"
      />
      <CardContent>
        <Typography variant="body2" color={"text.secondary"}>
          도레미파 솔라시도 도시라솔 파미레도
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Item;
