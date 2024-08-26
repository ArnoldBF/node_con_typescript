

import {findHeroById} from './service/hero.service'


const hero = findHeroById(6);

console.log(hero?.name ?? "Hero not found");



