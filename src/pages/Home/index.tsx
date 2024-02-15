import { Container } from "../../components/Container";

export function Home() {

  return (
    <Container>
         <section className="w-full flex justify-center p-3 rounded-2xl bg-white justify-around gap-5">
            <input placeholder="Digite o nome do carro" className="w-full rounded-xl border-2 p-2 text-black"/>
            <button className="bg-red-600 px-20 rounded-2xl text-white">Buscar</button>
         </section>
    </Container>
   
  )
}

