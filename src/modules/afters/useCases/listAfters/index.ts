import { AftersRepository } from '../../repositories/implementations/AftersRepository'
import { ListAftersController } from './ListAftersController'
import { ListAftersUseCase } from './ListAftersUseCase'

const aftersRepository = AftersRepository.getInstance()

const listAfterUseCase = new ListAftersUseCase(aftersRepository)

const listAfterController = new ListAftersController(listAfterUseCase)

export { listAfterController }
