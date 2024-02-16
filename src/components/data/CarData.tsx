export interface ICar {
    id: string,
    name: string,
    year: string,
    km: number,
    price: number,
    city: string
}

export interface ICarNames {
    label: string
}

export const carDatas: ICar[] = [
    {
        id: "1",
        name: "BMW-X1",
        year: "2021/2022",
        km: 50328,
        price: 239.000,
        city: "Blumenau - SC" 
    },
    {
        id: "2",
        name: "BMW-X2",
        year: "2022/2023",
        km: 60328,
        price: 245.000,
        city: "Jaraguá do Sul - SC" 
    },
    {
        id: "3",
        name: "BMW-X2",
        year: "2022/2023",
        km: 60328,
        price: 245.000,
        city: "Jaraguá do Sul - SC" 
    },
    {
        id: "4",
        name: "BMW-X2",
        year: "2022/2023",
        km: 60328,
        price: 245.000,
        city: "Jaraguá do Sul - SC" 
    },
    {
        id: "5",
        name: "BMW-X2",
        year: "2022/2023",
        km: 60328,
        price: 245.000,
        city: "Jaraguá do Sul - SC" 
    },
    {
        id: "6",
        name: "BMW-X2",
        year: "2022/2023",
        km: 60328,
        price: 245.000,
        city: "Jaraguá do Sul - SC" 
    },

]

export const carNames: ICarNames[] = [
    {
        label: 'BMW-X2'
    },
    {
        label: 'BMW-X1'
    },
    {
        label: 'Jetta'
    }
]