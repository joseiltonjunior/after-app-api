import { Request, Response } from 'express'
import { AftersRepository } from '../../repositories/implementations/AftersRepository'
import { DeleteAfterUseCase } from './DeleteAfterUseCase'

class DeleteAfterController {
  constructor(private deleteAfterUseCase: DeleteAfterUseCase) {}

  handle(req: Request, res: Response) {
    const { id } = req.params
    const aftersRepository = AftersRepository.getInstance()
    const AfterAlreadyExists = aftersRepository.findById(id)

    if (!AfterAlreadyExists) {
      return res.status(400).json({ error: { message: 'After not exists.' } })
    }

    this.deleteAfterUseCase.execute({ id })

    return res.status(200).json({ message: 'Successfully deleted after.' })
  }
}

export { DeleteAfterController }
