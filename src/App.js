import { ThemeProvider } from '@mui/material/styles';
import { Badge, Box, Container, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Search, ShoppingCartOutlined, Sort } from '@mui/icons-material'
import {theme} from './theme'
import Logo from './assets/ecoFood.svg'
import { grey } from '@mui/material/colors';
import './App.css'
import Food1 from './assets/food1.png'
import FoodCard from './components/FoodCard';


const App = () =>  {

const menu = [
  {id: 1, title: 'Hainanese Chicken Rice', location: 'Green Leaf Eatery - Dansoman', close: true, delivery: '20-35min', price: 45, desc: 'Comes with one cup of rice, 3 pieces of fried chicken marinated with fresh vegetable oil.', img: Food1},
  {id: 2, title: 'Hainanese Chicken Rice', location: 'Green Leaf Eatery - Dansoman', close: true, delivery: '20-35min', price: 35, desc: 'Comes with one cup of rice, 3 pieces of fried chicken marinated with fresh vegetable oil.', img: Food1},
  {id: 3, title: 'Hainanese Chicken Rice', location: 'Green Leaf Eatery - Dansoman', close: true, delivery: '20-35min', price: 65, desc: 'Comes with one cup of rice, 3 pieces of fried chicken marinated with fresh vegetable oil.', img: Food1},
  {id: 4, title: 'Hainanese Chicken Rice', location: 'Green Leaf Eatery - Dansoman', close: true, delivery: '20-35min', price: 20, desc: 'Comes with one cup of rice, 3 pieces of fried chicken marinated with fresh vegetable oil.', img: Food1},
  {id: 5, title: 'Hainanese Chicken Rice', location: 'Green Leaf Eatery - Dansoman', close: true, delivery: '20-35min', price: 32, desc: 'Comes with one cup of rice, 3 pieces of fried chicken marinated with fresh vegetable oil.', img: Food1},

]

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{bgcolor: grey[100], padding: '10px', position: 'sticky', top: 0, zIndex: 10}}>
          <Container>
            
            <Box mt={2} sx={{display: 'flex', justifyContent: 'space-between', '& span': {
              display: 'flex',
              gap: '.5rem'
            }}}>
              <img src={Logo} alt='logo' />
              <span>
                <Badge variant='standard' badgeContent={2} overlap='circular' color='primary'>
                  <IconButton >
                    <ShoppingCartOutlined />
                  </IconButton>
                </Badge>
                <IconButton>
                  <Sort sx={{rotate: '180deg'}} />
                </IconButton>
              </span>
            </Box>
            
            <Box my={3}>
              <Typography variant='h6' mt={2} sx={{fontWeight: 700}}>Food Menu</Typography>
              <TextField size='small' fullWidth type={'search'} variant='outlined' 
              placeholder='Search favorites here'
              InputProps={{
                endAdornment: <InputAdornment position='end'><Search /></InputAdornment>
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                    borderRadius: '10px',
                    background: '#fff'
                }
              }} />

            </Box>
          </Container>
          </Box>
          
          <Container>
            {/* Menu List */}
            <Box my={'2rem'} mx={2}>
              <Grid container spacing={3}>
                {
                  menu?.map(el => {
                    return (
                      <Grid key={el.id} item xs={12} sm={6} lg={4}>
                        <FoodCard
                          image={el.img}
                          location={el.location}
                          desc={el.desc}
                          title={el.title}
                          delivery={el.delivery}
                          price={el.price}
                          closed={el.close}
                        />
                      </Grid>
                    )
                  })
                }
              </Grid>
            </Box>



        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
