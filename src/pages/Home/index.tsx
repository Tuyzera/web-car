import { CardCar } from "../../components/CardCar";
import { Container } from "../../components/Container";
import { carDatas } from "../../components/data/CarData";


export function Home() {
  const carros = carDatas; //Example to test

  return (
    <Container>
         <section className="w-full flex justify-center p-4 rounded-lg bg-white justify-around gap-5 mx-auto gap-2">
            <input placeholder="Digite o nome do carro" className="w-full rounded-xl border-2 p-2 text-black"/>
            <button className="bg-red-600 px-20 rounded-2xl text-white">Buscar</button>
         </section>
          <h1 className="font-bold text-center mt-6 text-2xl mb-4">Carros Novos usados em todo Brasil</h1>
         <div className="grid grid-cols-3 mt-2 gap-5 w-full">
          {carros.map((item) => {
            return(
              <CardCar name={item.name} year={item.year} km={item.km} price={item.price.toFixed(3)} city={item.city}/>
            )
          })}
         </div>
    </Container>
   
  )
}

