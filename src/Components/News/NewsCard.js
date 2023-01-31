import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NewsCard = ({
                      urlToImage,
                      title = '',
                      description = '',
                      author = '',
                      url = '',
                      publishedAt = '',
                  }) => {
    return (
        <Grid item xl={4} md={6} sm={12} xs={12} mb={2}>
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    sx={{height: 140}}
                    image={urlToImage}
                    title="newsPhoto"
                    alt="No image found"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={2}>
                        {author ? author : 'Unknown author'}
                        <Typography variant="body2" color="text.secondary">
                            {new Date(publishedAt).toUTCString()}
                        </Typography>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant={'outlined'} href={url}>More info</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default NewsCard;




