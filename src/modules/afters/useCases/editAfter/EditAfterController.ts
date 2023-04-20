import { Request, Response } from 'express'
import { AftersRepository } from '../../repositories/implementations/AftersRepository'
import { EditAfterUseCase } from './EditAfterUseCase'

class EditAfterController {
  constructor(private editAfterUseCase: EditAfterUseCase) {}

  handle(req: Request, res: Response) {
    const {
      local,
      name,
      hour,
      payment,
      stars,
      pic,
      phone,
      description,
      indicator,
    } = req.body
    const { id } = req.params

    const aftersRepository = AftersRepository.getInstance()
    const AfterAlreadyExists = aftersRepository.findById(id)
    const afterNameUsed = aftersRepository.findByName(name)

    if (!AfterAlreadyExists) {
      return res.status(400).json({ error: { message: 'After not exists.' } })
    }

    if (afterNameUsed && afterNameUsed.id !== id) {
      return res
        .status(400)
        .json({ error: { message: 'After name is already in use.' } })
    }

    this.editAfterUseCase.execute({
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

    return res.status(200).json({
      message: 'Successfully edit after.',
    })
  }
}

export { EditAfterController }
