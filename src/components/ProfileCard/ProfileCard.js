import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { UserContext } from '../../contexts'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0 auto'
  },
  media: {
    height: 140,
  },
});

const ProfileCard = () => {
  const classes = useStyles();
  const { selectedUser } = useContext(UserContext)

  const openURL = (url) => window.open(url)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={selectedUser.avatar_url}
          title={`Avatar de ${selectedUser.name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${selectedUser.name} - ${selectedUser.login}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {selectedUser.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={() => openURL(selectedUser.html_url)} color="primary">
          Perfil
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProfileCard