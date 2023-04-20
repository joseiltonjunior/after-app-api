import { Router, Request, Response } from 'express'
import { validationResult } from 'express-validator'

import { createAfterController } from '../modules/afters/useCases/createAfter'
import { deleteAfterController } from '../modules/afters/useCases/deleteAfter'
import { editAfterController } from '../modules/afters/useCases/editAfter'
import { listAfterController } from '../modules/afters/useCases/listAfters'
import { afterValidator } from '../validations/after'

const aftersRoutes = Router()

aftersRoutes.post('/', afterValidator, (req: Request, res: Response) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  return createAfterController.handle(req, res)
})

aftersRoutes.get('/', (req, res) => {
  return listAfterController.handle(req, res)
})

aftersRoutes.delete('/:id', (req, res) => {
  return deleteAfterController.handle(req, res)
})

aftersRoutes.put('/:id', afterValidator, (req: Request, res: Response) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  return editAfterController.handle(req, res)
})

export { aftersRoutes }
