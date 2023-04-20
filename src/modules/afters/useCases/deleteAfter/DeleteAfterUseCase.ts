import { IAftersRepository } from '../../repositories/IAftersRepository'

interface IRequest {
  id: string
}

class DeleteAfterUseCase {
  constructor(private AftersRepository: IAftersRepository) {}

  execute({ id }: IRequest) {
    this.AftersRepository.delete(id)
  }
}

export { DeleteAfterUseCase }
