// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { PersonalityQuizService } from './personality-quiz.class'

// Main data model schema
export const personalityQuizSchema = Type.Object(
  {
    id: Type.Number(),
    question: Type.String(),
    answers: Type.Array(Type.Object({}))
  },
  { $id: 'PersonalityQuiz', additionalProperties: false }
)
export type PersonalityQuiz = Static<typeof personalityQuizSchema>
export const personalityQuizValidator = getValidator(personalityQuizSchema, dataValidator)
export const personalityQuizResolver = resolve<PersonalityQuiz, HookContext<PersonalityQuizService>>({})

export const personalityQuizExternalResolver = resolve<PersonalityQuiz, HookContext<PersonalityQuizService>>(
  {}
)

// Schema for creating new entries
export const personalityQuizDataSchema = Type.Pick(personalityQuizSchema, ['question', 'answers'], {
  $id: 'PersonalityQuizData'
})
export type PersonalityQuizData = Static<typeof personalityQuizDataSchema>
export const personalityQuizDataValidator = getValidator(personalityQuizDataSchema, dataValidator)
export const personalityQuizDataResolver = resolve<PersonalityQuiz, HookContext<PersonalityQuizService>>({})

// Schema for updating existing entries
export const personalityQuizPatchSchema = Type.Partial(personalityQuizSchema, {
  $id: 'PersonalityQuizPatch'
})
export type PersonalityQuizPatch = Static<typeof personalityQuizPatchSchema>
export const personalityQuizPatchValidator = getValidator(personalityQuizPatchSchema, dataValidator)
export const personalityQuizPatchResolver = resolve<PersonalityQuiz, HookContext<PersonalityQuizService>>({})

// Schema for allowed query properties
export const personalityQuizQueryProperties = Type.Pick(personalityQuizSchema, ['id', 'question', 'answers'])
export const personalityQuizQuerySchema = Type.Intersect(
  [
    querySyntax(personalityQuizQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type PersonalityQuizQuery = Static<typeof personalityQuizQuerySchema>
export const personalityQuizQueryValidator = getValidator(personalityQuizQuerySchema, queryValidator)
export const personalityQuizQueryResolver = resolve<
  PersonalityQuizQuery,
  HookContext<PersonalityQuizService>
>({})
