import 'reflect-metadata'
import { validate } from 'class-validator'

export function RestInpuValidator<T> (Type: new () => T) {
  return function (
    target: any,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<Function>
  ) {
    const method = descriptor.value
    descriptor.value = async function () {
      const dto = Object.assign(Type, arguments[0])

      const errors = await validate(dto)

      if (errors.length > 0) {
        const errosResult = errors.map((e) => {
          return {
            property: e.property,
            constraints: e.constraints
          }
        })
        return {
          body: errosResult,
          status: 400
        }
      }
      return method?.apply(this, arguments)
    }
  }
}
