import { Autocomplete, TextField } from "@mui/material";
import { CardCar } from "../../components/CardCar";
import { Container } from "../../components/Container";
import { carDatas, carNames } from "../../components/data/CarData";


export function Home() {
  const carros = carDatas; //Example to test
  const carName = carNames;

  return (
    
    <Container>
         <section className="w-full flex justify-around p-8 rounded-lg bg-white gap-5 mx-auto ">
         <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={carName}
            sx={{ width: 1000 }}
            renderInput={(params) => <TextField {...params} label="Digite o nome do carro..." />}
           />
            <button className="bg-red-600 px-20 rounded-2xl text-white">Buscar</button>
         </section>
          <h1 className="font-bold text-center mt-6 text-2xl mb-4">Carros novos usados em todo Brasil</h1>
         <div className="grid grid-cols-3 mt-2 gap-5 w-full">
          {carros.map((item) => {
            return(
              <CardCar id={item.id} name={item.name} year={item.year} km={item.km} price={item.price.toFixed(3)} city={item.city}/>
            )
          })}
         </div>
    </Container>
  )
}

