import { Request, Response } from 'restify'

import { IController } from 'src/shared/interfaces/IController.interface'

export const adapRouterRestify = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...req.body,
      ...req.params,
      ...req.files
    }

    const httpResponse = await controller.handler(request)
    return res.send(httpResponse.status, httpResponse.body)
  }
}
