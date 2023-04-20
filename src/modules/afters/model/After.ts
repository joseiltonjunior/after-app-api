import { v4 as uuidV4 } from 'uuid'

class AfterModel {
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

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { AfterModel }
