import { IHttpResponse } from 'src/shared/interfaces/IHttpResponse.interface'

export const badRequest = (body: any): IHttpResponse => {
    return {
        body: body,
        status: 400,
    }
}

export const ok = (body: any): IHttpResponse => {
    return {
        body: body,
        status: 200,
    }
}

export const created = (body: any): IHttpResponse => {
    return {
        body: body,
        status: 201,
    }
}

export const server = (body: any): IHttpResponse => {
    return {
        body: body,
        status: 500,
    }
}

export const noContent = (): IHttpResponse => {
    return {
        body: {},
        status: 204,
    }
}

export const notFound = (body: any): IHttpResponse => {
    return {
        body: body || {},
        status: 404,
    }
}
