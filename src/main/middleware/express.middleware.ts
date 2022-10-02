import { NextFunction, Request, Response } from 'express'
import * as jsonwebtoken from 'jsonwebtoken'
import { badRequest } from '../../presentation/interfaces/responses.interface'
import { IHttpResponse } from '../../shared/interfaces/IHttpResponse.interface'

interface IRequest extends Request {
    id?: string
}

class Authorization {
    constructor(private readonly jwt: typeof jsonwebtoken) {}

    authenticate(
        req: IRequest,
        res: Response,
        _next: NextFunction
    ): IHttpResponse | void {
        const token = req.headers['x-access-token']

        if (!token) return badRequest('no token provid')

        return this.jwt.verify(
            `${token}`,
            `${process.env.SECRET_ENV}`,
            (error: any, decode: any): IHttpResponse | any => {
                if (error) {
                    return badRequest('failed to authenticate token')
                }
                const { id } = decode

                req.id = id

                _next()
            }
        )
    }
}

export default new Authorization(jsonwebtoken)
