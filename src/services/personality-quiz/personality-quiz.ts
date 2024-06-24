// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  personalityQuizDataValidator,
  personalityQuizPatchValidator,
  personalityQuizQueryValidator,
  personalityQuizResolver,
  personalityQuizExternalResolver,
  personalityQuizDataResolver,
  personalityQuizPatchResolver,
  personalityQuizQueryResolver
} from './personality-quiz.schema'

import type { Application } from '../../declarations'
import { PersonalityQuizService, getOptions } from './personality-quiz.class'

export const personalityQuizPath = 'personality-quiz'
export const personalityQuizMethods: Array<keyof PersonalityQuizService> = [
  'find',
  'get',
  'create',
  'patch',
  'remove'
]

export * from './personality-quiz.class'
export * from './personality-quiz.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const personalityQuiz = (app: Application) => {
  // Register our service on the Feathers application
  app.use(personalityQuizPath, new PersonalityQuizService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: personalityQuizMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(personalityQuizPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(personalityQuizExternalResolver),
        schemaHooks.resolveResult(personalityQuizResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(personalityQuizQueryValidator),
        schemaHooks.resolveQuery(personalityQuizQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(personalityQuizDataValidator),
        schemaHooks.resolveData(personalityQuizDataResolver)
      ],
      patch: [
        schemaHooks.validateData(personalityQuizPatchValidator),
        schemaHooks.resolveData(personalityQuizPatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [personalityQuizPath]: PersonalityQuizService
  }
}
