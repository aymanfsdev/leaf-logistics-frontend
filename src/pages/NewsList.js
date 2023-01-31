import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import $api from '../helpers/api_helper';
import Container from '@mui/material/Container';
import NewsCard from '../Components/News/NewsCard';
import {CircularProgress, Grid, InputAdornment, TextField} from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const NewsList = ({country}) => {
    const {category: categoryName = ''} = useParams();

    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);


    const onSearchChange = (e) => {
        setTimeout(() => {
            setSearch(e.target.value.toLowerCase());
        }, [900]);
    };

    useEffect(() => {
        setCategory(categoryName);
    }, [categoryName]);

    useEffect(() => {
        if (category) {
            setLoading(true)

            updateNews().then(({articles = [], totalResults = 0}) => {
                setArticles(articles);
                setTotal(totalResults);

                setLoading(false)
            });
        }
    }, [
        country,
        search,
        category,
    ]);

    useEffect(() => {
        if (currentPage > 1) {
            updateNews().then(({articles = [], totalResults = 0}) => {
                setArticles(prev => {
                    return [...prev, ...articles];
                });
                setTotal(totalResults);

                setLoading(false)
            });
        }
    }, [
        currentPage,
    ]);

    const updateNews = async () => {
        try {
            const {data} = await $api.get(``, {
                params: {
                    apiKey: process.env.REACT_APP_NEWS_API,
                    page: currentPage,
                    pageSize: pageSize,
                    q: search,
                    category: category,
                    country: country,
                    language: 'en',
                },
            });

            const {
                articles = [],
                totalResults = 0,
            } = data;

            return {
                articles,
                totalResults,
            };

        } catch (error) {
            console.log(error);
        }
    };

    return (
        loading ?
            <CircularProgress style={{position: 'absolute', top: '50%', left: '50%'}} /> :

            <Container flex>
                <TextField
                    label="Search news"
                    onChange={onSearchChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    sx={{display: 'flex', mt: 7}}
                />
                <InfiniteScroll
                    style={{margin: '40px 0px', marginTop: '90px', overflow: 'none'}}
                    dataLength={articles.length}
                    next={() => setCurrentPage((prev) => {
                        return ++prev;
                    })}
                    hasMore={articles.length !== total}
                    loader={<CircularProgress/>}
                >
                    <Grid container direction={'row'} spacing={1}>
                        {articles.map(({urlToImage, title, description, author, url, publishedAt}) => (
                            <NewsCard
                                key={url}
                                urlToImage={urlToImage}
                                title={title}
                                description={description}
                                author={author}
                                url={url}
                                publishedAt={publishedAt}
                            />
                        ))}
                    </Grid>
                </InfiniteScroll>
            </Container>
    );
};

export default NewsList;
