import { AftersRepository } from '../../repositories/implementations/AftersRepository'
import { CreateAfterController } from './CreateAfterController'
import { CreateAfterUseCase } from './CreateAfterUseCase'

const afterRepository = AftersRepository.getInstance()

const createAfterUseCase = new CreateAfterUseCase(afterRepository)

const createAfterController = new CreateAfterController(createAfterUseCase)

export { createAfterController }
