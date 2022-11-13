import { Request, Response } from 'express'

import { IController } from 'src/shared/interfaces/IController.interface'

export const adapRouterExpress = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...req.body,
      ...req.params,
      url: `${req.protocol}://${req.get('Host')}${req.originalUrl}`
    }
    const httpResponse = await controller.handler(request)
    return res.status(httpResponse.status).json(httpResponse.body)
  }
}
