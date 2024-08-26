import { heroes } from "../data/hero";



export const findHeroById = (id:number) => {

    if(id){
        return heroes.find((hero) => hero.id == id);
    }
   
};