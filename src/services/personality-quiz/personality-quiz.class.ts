// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type {
  PersonalityQuiz,
  PersonalityQuizData,
  PersonalityQuizPatch,
  PersonalityQuizQuery
} from './personality-quiz.schema'

export type { PersonalityQuiz, PersonalityQuizData, PersonalityQuizPatch, PersonalityQuizQuery }

export interface PersonalityQuizParams extends KnexAdapterParams<PersonalityQuizQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class PersonalityQuizService<ServiceParams extends Params = PersonalityQuizParams> extends KnexService<
  PersonalityQuiz,
  PersonalityQuizData,
  PersonalityQuizParams,
  PersonalityQuizPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'personality-quiz'
  }
}
