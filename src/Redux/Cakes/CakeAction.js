import { Buy_Cake } from "./CakeType"

export const buyCake = (num = 1)=>{
    return{
        type:Buy_Cake,
        payload: num
    }
}