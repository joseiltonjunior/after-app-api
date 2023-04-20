import {
  IAfterDTO,
  IAftersRepository,
} from '../../repositories/IAftersRepository'

class EditAfterUseCase {
  constructor(private AftersRepository: IAftersRepository) {}

  execute({
    local,
    name,
    hour,
    payment,
    stars,
    pic,
    phone,
    description,
    indicator,
    id,
  }: IAfterDTO) {
    this.AftersRepository.edit({
      local,
      name,
      hour,
      payment,
      stars,
      pic,
      phone,
      description,
      indicator,
      id,
    })
  }
}

export { EditAfterUseCase }
