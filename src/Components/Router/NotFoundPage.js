import React from 'react'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';

const NotFoundPage = () => {

	return (
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}>
				<h1>404</h1>
				<h4>Sorry, page not found</h4>
				<div>
					<Link to='/'>
						Back to Home
					</Link>
				</div>
			</Box>
	)
}

export default NotFoundPage
