import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import carro from '../../assets/150223_WA_Coquetel-de-lancamento-do-novo-BMW-X1-74-1.webp'
import { ICar } from '../data/CarData';


export function CardCar({name, year, km, price, city} : ICar){
    return(
             <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={carro}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {year} . {km} km
          </Typography>
          <br/>
          <Typography gutterBottom variant="h5" component="div" className="mt-10">
            R$ {price}
          </Typography>

          <div className="border-b-2 mb-3"></div>

          <Typography variant="body2" color="text.secondary">
            {city}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}