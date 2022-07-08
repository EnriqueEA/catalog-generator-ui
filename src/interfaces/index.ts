export interface User {
   email: string
   profilePicture: string
   userName: string
}

export interface Product {
   id?: string
   nombre: string
   marca: string
   precioPorMenor: number
   precioPorMayor: number
   imageUrl: string[]
}
