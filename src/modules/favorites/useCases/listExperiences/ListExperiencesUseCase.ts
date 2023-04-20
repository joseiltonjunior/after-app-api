import { IExperiencesRepository } from '../../repositories/IExperiencesRepository'
import { ExperienceModel } from '../../model/Favorite'

class ListExperiencesUseCase {
  constructor(private ExperiencesRepository: IExperiencesRepository) {}

  execute(): ExperienceModel[] {
    const Experiences = this.ExperiencesRepository.list()

    return Experiences
  }
}

export { ListExperiencesUseCase }
