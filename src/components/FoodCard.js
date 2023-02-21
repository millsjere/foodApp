import { DeliveryDining } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Divider, Typography } from '@mui/material'
import React from 'react'


const FoodCard = ({id, title, desc, location, image, price, closed, delivery}) => {


  return (
    <Card variant='outlined' elevation={0} sx={{
                borderRadius: '10px', 
                '& .MuiCardMedia-root': {
                height: '180px'
            }}
        }>
        <CardMedia 
            alt="foods"
            image={image}
         >
            <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '15px'}}>
                { closed && <Chip size='small' color='secondary' label={<Typography variant='body2'>Closed</Typography>} /> }
                <Chip size='small' sx={{bgcolor: '#fff'}} label={<Typography variant='body2' sx={{display: 'flex', alignItems: 'center', gap: '5px'}}><DeliveryDining fontSize='small' /> {delivery}</Typography>} />
            </Box>
         </CardMedia>
        <CardContent>
            <Typography variant='h6' noWrap sx={{fontWeight: 600}}>{title}</Typography>
            <Typography variant='body1' noWrap mb={1} color={'GrayText'}>{location}</Typography>
            <Typography  variant='body2' mb={1} color={'GrayText'}>{desc}</Typography>
        </CardContent>
        <Divider />
        <CardActions sx={{padding: '1rem', display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant='h6' sx={{fontWeight: 700, fontSize: '1rem'}}>GHc{price}</Typography>
            <Button size="small" variant='contained' color='primary' disableElevation sx={{borderRadius: '5px'}}>Add To Order</Button>
        </CardActions>
    </Card>
  )
}

export default FoodCard