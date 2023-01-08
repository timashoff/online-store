
export type Product = {
  id: number,
  title: string,
  description: string,
  price: number,
  stock: number,
  brand: string,
  categoty: string,
  img: string[],
  discount?: number,
}

export type Cart = {
  id: number[],
  amount: number[],
}

export type Promocode = {
  name: string[],
  disount: number[],
}

export type Filter = {
  price: number[],
  stock: number[],
  category: string[],
}

export type Validation = {
  name: string,
  tel: number,
  adress: string,
  email: string,
  cardNumber: number,
  cardCVV: number,
  cardDate: string,
}