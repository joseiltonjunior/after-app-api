import { Request, Response } from 'express'
import { ListAftersUseCase } from './ListAftersUseCase'

class ListAftersController {
  constructor(private listAftersUseCase: ListAftersUseCase) {}

  handle(_req: Request, res: Response) {
    const all = this.listAftersUseCase.execute()

    if (all.length < 1) {
      return res.status(200).json({ message: 'There are no afters.' })
    }

    return res.status(200).json(all)
  }
}

export { ListAftersController }
