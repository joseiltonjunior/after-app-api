import { AfterModel } from '../../model/After'
import { IAftersRepository, IAfterDTO } from '../IAftersRepository'

class AftersRepository implements IAftersRepository {
  private Afters: AfterModel[]

  private static INSTANCE: AftersRepository

  private constructor() {
    this.Afters = []
  }

  public static getInstance(): AftersRepository {
    if (!AftersRepository.INSTANCE) {
      AftersRepository.INSTANCE = new AftersRepository()
    }

    return AftersRepository.INSTANCE
  }

  create({
    local,
    name,
    hour,
    payment,
    stars,
    pic,
    phone,
    description,
    indicator,
  }: IAfterDTO): void {
    const after = new AfterModel()

    Object.assign(after, {
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

    this.Afters.push(after)
  }

  list(): AfterModel[] {
    return this.Afters
  }

  edit({
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
  }: IAfterDTO): void {
    this.Afters.map((after) => {
      if (after.id === id) {
        console.log(after)
        after.name = name
        after.description = description
        after.hour = hour
        after.indicator = indicator
        after.local = local
        after.payment = payment
        after.stars = stars
        after.pic = pic
        after.phone = phone
      }
    })
  }

  findByName(name: string): AfterModel {
    const after = this.Afters.find((after) => after.name === name)
    return after
  }

  findById(id: string): AfterModel {
    const after = this.Afters.find((after) => after.id === id)
    return after
  }

  delete(id: string): void {
    const filter = this.Afters.filter((after) => after.id !== id)

    this.Afters = filter
  }
}

export { AftersRepository }
