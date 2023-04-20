import { Router, Request, Response } from 'express'
import { validationResult } from 'express-validator'

import { createExperienceController } from '../modules/favorites/useCases/createExperience'
import { deleteExperienceController } from '../modules/favorites/useCases/deleteExperience'
import { editExperienceController } from '../modules/favorites/useCases/editExperience'
import { listExperienceController } from '../modules/favorites/useCases/listExperiences'
import { experienceValidator } from '../validations/experience'

const experiencesRoutes = Router()

experiencesRoutes.post(
  '/',
  experienceValidator,
  (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    return createExperienceController.handle(req, res)
  },
)

experiencesRoutes.get('/', (req, res) => {
  return listExperienceController.handle(req, res)
})

experiencesRoutes.delete('/:id', (req, res) => {
  return deleteExperienceController.handle(req, res)
})

experiencesRoutes.put(
  '/:id',
  experienceValidator,
  (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    return editExperienceController.handle(req, res)
  },
)

export { experiencesRoutes }
