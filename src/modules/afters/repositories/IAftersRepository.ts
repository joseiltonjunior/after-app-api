import { AfterModel } from '../model/After'

export interface IAfterDTO {
  local: string
  name: string
  hour: string
  payment: string
  stars: number
  pic: string
  phone: string
  description: string
  indicator: number
  id?: string
}

interface IAftersRepository {
  findByName(name: string, office: string): AfterModel
  findById(id: string): AfterModel
  list(): AfterModel[]
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
  }: IAfterDTO): void
  delete(id: string): void
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
  }: IAfterDTO): void
}

export { IAftersRepository }
