import { useQuery} from "@tanstack/react-query";
import axios from "axios"
import {AttributeTypes, RoleTypes, ZodiacTypes, Hero} from "./types"
import { ATTRIBUTES, ROLES, ZODIACS } from "../utils/constants";


async function fetchHeroes() {
    const { data } = await axios.get<Hero[]>("https://raw.githubusercontent.com/CeciliaBot/CeciliaBot.github.io/master/data/HeroDatabase.json")
    return Object.values(data)
}

export function useFetchHeroes() {
  return useQuery(["heroes"], fetchHeroes, {
    staleTime: Infinity,
    select: data => {
      return data.map(hero => {
        return {
          ...hero,
          attribute: ATTRIBUTES[hero.attribute as keyof AttributeTypes],
          role: ROLES[hero.role as keyof RoleTypes],
          zodiac: ZODIACS[hero.zodiac as keyof ZodiacTypes],
        }
      })
    }
  });
}
