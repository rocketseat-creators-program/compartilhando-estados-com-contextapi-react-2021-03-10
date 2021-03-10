import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://avatars.githubusercontent.com/u/45862435?v=4"
          title="Avatar do dev"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Nome do dev
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bio do dev
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Perfil
        </Button>
        <Button size="small" color="primary">
          Repositórios
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProfileCard