import { articles } from './articles/articles'
import { personalityQuiz } from './personality-quiz/personality-quiz'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(articles)
  app.configure(personalityQuiz)
  // All services will be registered here
}
