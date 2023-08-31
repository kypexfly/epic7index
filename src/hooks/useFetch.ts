/* eslint-disable camelcase */
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { AttributeTypes, RoleTypes, ZodiacTypes, Hero, Artifact, RoleArtTypes } from './types'
import { HeroDetailFetch, HeroDetail } from './herodetailTypes'
import { ATTRIBUTES, ROLES, ROLESART, ZODIACS } from '../utils/constants'
import { ArtifactDetail, ArtifactDetailFetch } from './artifactdetailTypes'
import { ArticleList, NewsFetch } from './newsTypes'

async function fetchHeroes() {
  const { data } = await axios.get<Hero[]>(
    'https://raw.githubusercontent.com/CeciliaBot/CeciliaBot.github.io/master/data/HeroDatabase.json',
  )
  return Object.values(data)
}

async function fetchHero(id: string): Promise<HeroDetail> {
  const { data } = await axios.get<HeroDetailFetch>(`https://api.epicsevendb.com/hero/${id}`)
  return data.results[0]
}

async function fetchArtifacts() {
  const { data } = await axios.get<Artifact[]>(
    'https://raw.githubusercontent.com/CeciliaBot/CeciliaBot.github.io/master/data/artifacts.json',
  )
  return Object.values(data)
}

async function fetchArtifact(id: string): Promise<ArtifactDetail> {
  const { data } = await axios.get<ArtifactDetailFetch>(
    `https://api.epicsevendb.com/artifact/${id}`,
  )
  return data.results[0]
}

async function fetchNews(): Promise<ArticleList[]> {
  const { data } = await axios.get<NewsFetch>(
    'https://api.onstove.com/cwms/v1.0/channel/126/article_group/FIXED_ARTICLE/article/list?article_group_seq_list=985&content_yn=Y',
  )
  return data.value[0].list
}

export function useFetchNews() {
  return useQuery(['news'], fetchNews, {
    staleTime: Infinity,
  })
}

export function useFetchHeroes() {
  return useQuery(['heroes'], fetchHeroes, {
    staleTime: Infinity,
    select: (data) => {
      return data.map((hero) => {
        return {
          ...hero,
          attribute: ATTRIBUTES[hero.attribute as keyof AttributeTypes],
          role: ROLES[hero.role as keyof RoleTypes],
          zodiac: ZODIACS[hero.zodiac as keyof ZodiacTypes],
        }
      })
    },
  })
}

export function useFetchHero(_id: string) {
  return useQuery({
    queryKey: ['heroes', _id],
    queryFn: () => fetchHero(_id),
    enabled: _id !== '',
    staleTime: Infinity,
    retry: false,
    retryDelay: 3000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    select: (hero) => {
      return {
        ...hero,
        attribute: ATTRIBUTES[hero.attribute as keyof AttributeTypes],
        role: ROLESART[hero.role as keyof RoleArtTypes],
        zodiac: ZODIACS[hero.zodiac as keyof ZodiacTypes],
      }
    },
  })
}

export function useFetchArtifacts() {
  return useQuery(['artifacts'], fetchArtifacts, {
    staleTime: Infinity,
    select: (data) => {
      return data.map((artifact) => {
        return {
          ...artifact,
          role: ROLESART[artifact.role as keyof RoleArtTypes],
        }
      })
    },
  })
}

export function useFetchArtifact(_id: string) {
  return useQuery({
    queryKey: ['artifacts', _id],
    queryFn: () => fetchArtifact(_id),
    enabled: _id !== '',
    staleTime: Infinity,
    retry: false,
    retryDelay: 3000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    select: (artifact) => {
      return {
        ...artifact,
        role: ROLESART[artifact.role as keyof RoleArtTypes],
      }
    },
  })
}
