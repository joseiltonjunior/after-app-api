import { AftersRepository } from '../../repositories/implementations/AftersRepository'
import { DeleteAfterController } from './DeleteAfterController'
import { DeleteAfterUseCase } from './DeleteAfterUseCase'

const aftersRepository = AftersRepository.getInstance()

const deleteAfterUseCase = new DeleteAfterUseCase(aftersRepository)

const deleteAfterController = new DeleteAfterController(deleteAfterUseCase)

export { deleteAfterController }
