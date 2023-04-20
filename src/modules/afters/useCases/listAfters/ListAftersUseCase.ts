import { IAftersRepository } from '../../repositories/IAftersRepository'
import { AfterModel } from '../../model/After'

class ListAftersUseCase {
  constructor(private AftersRepository: IAftersRepository) {}

  execute(): AfterModel[] {
    const Afters = this.AftersRepository.list()

    return Afters
  }
}

export { ListAftersUseCase }
