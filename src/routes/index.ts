import { Router } from 'express'

import { aftersRoutes } from './afters.routes'

const router = Router()

router.use('/afters', aftersRoutes)

export { router }
