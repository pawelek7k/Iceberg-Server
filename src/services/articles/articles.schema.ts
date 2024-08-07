// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import type { Static } from '@feathersjs/typebox'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { ArticlesService } from './articles.class'

// Main data model schema
export const articlesSchema = Type.Object(
  {
    id: Type.Number(),
    title: Type.String(),
    killers: Type.Array(Type.String()),
    victims: Type.Array(Type.String()),
    date: Type.String(),
    images: Type.Array(Type.String()),
    description: Type.String(),
    details: Type.String(),
    location: Type.String(),
    psychologicalBackground: Type.String(),
    policeActions: Type.String(),
    lawsuit: Type.String(),
    socialReactions: Type.String(),
    legacyAndImpact: Type.String()
  },
  { $id: 'Articles', additionalProperties: false }
)
export type Articles = Static<typeof articlesSchema>
export const articlesValidator = getValidator(articlesSchema, dataValidator)
export const articlesResolver = resolve<Articles, HookContext<ArticlesService>>({})

export const articlesExternalResolver = resolve<Articles, HookContext<ArticlesService>>({})

// Schema for creating new entries
export const articlesDataSchema = Type.Pick(articlesSchema, ['title', 'killers', 'victims', 'date', 'images', 'description', 'details', 'location', 'psychologicalBackground', 'policeActions', 'lawsuit', 'socialReactions', 'legacyAndImpact'], {
  $id: 'ArticlesData'
})
export type ArticlesData = Static<typeof articlesDataSchema>
export const articlesDataValidator = getValidator(articlesDataSchema, dataValidator)
export const articlesDataResolver = resolve<Articles, HookContext<ArticlesService>>({})

// Schema for updating existing entries
export const articlesPatchSchema = Type.Partial(articlesSchema, {
  $id: 'ArticlesPatch'
})
export type ArticlesPatch = Static<typeof articlesPatchSchema>
export const articlesPatchValidator = getValidator(articlesPatchSchema, dataValidator)
export const articlesPatchResolver = resolve<Articles, HookContext<ArticlesService>>({})

// Schema for allowed query properties
export const articlesQueryProperties = Type.Pick(articlesSchema, ['id', 'title', 'killers', 'victims', 'date', 'images', 'description', 'details', 'location', 'psychologicalBackground', 'policeActions', 'lawsuit', 'socialReactions', 'legacyAndImpact'])
export const articlesQuerySchema = Type.Intersect(
  [
    querySyntax(articlesQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type ArticlesQuery = Static<typeof articlesQuerySchema>
export const articlesQueryValidator = getValidator(articlesQuerySchema, queryValidator)
export const articlesQueryResolver = resolve<ArticlesQuery, HookContext<ArticlesService>>({})
