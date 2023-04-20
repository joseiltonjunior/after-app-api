import {
  IEducationRepository,
  ICreateEducationDTO,
} from '../../repositories/IEducationRepository'

class CreateEducationUseCase {
  constructor(private educationRepository: IEducationRepository) {}

  execute({ name, course, description, time }: ICreateEducationDTO) {
    this.educationRepository.create({
      name,
      course,
      description,
      time,
    })
  }
}

export { CreateEducationUseCase }
