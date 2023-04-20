import { AftersRepository } from '../../repositories/implementations/AftersRepository'
import { EditAfterController } from './EditAfterController'
import { EditAfterUseCase } from './EditAfterUseCase'

const afterRepository = AftersRepository.getInstance()

const editAfterUseCase = new EditAfterUseCase(afterRepository)

const editAfterController = new EditAfterController(editAfterUseCase)

export { editAfterController }
