/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { AftersRepository } from '../../repositories/implementations/AftersRepository'
import { CreateAfterUseCase } from './CreateAfterUseCase'

class CreateAfterController {
  constructor(private createAfterUseCase: CreateAfterUseCase) {}

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

    const aftersRepository = AftersRepository.getInstance()
    const afterAlreadyExists = aftersRepository.findByName(name)

    if (afterAlreadyExists) {
      return res
        .status(400)
        .json({ error: { message: 'After already exists.' } })
    }

    this.createAfterUseCase.execute({
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

    return res.status(201).json({
      message: 'Successfully created after.',
    })
  }
}

export { CreateAfterController }
