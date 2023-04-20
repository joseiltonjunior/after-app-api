import {
  IAftersRepository,
  IAfterDTO,
} from '../../repositories/IAftersRepository'

class CreateAfterUseCase {
  constructor(private aftersRepository: IAftersRepository) {}

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
  }: IAfterDTO) {
    this.aftersRepository.create({
      local,
      name,
      hour,
      payment,
      stars,
      pic,
      phone,
      description,
      indicator,
    })
  }
}

export { CreateAfterUseCase }
