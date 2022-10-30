import { IsString, MaxLength, MinLength } from 'class-validator'

export class CreateUserDto {
    @IsString()
    id!: string

    @IsString()
    @MinLength(4)
    @MaxLength(100)
    name!: string

    @IsString()
    @MinLength(4)
    @MaxLength(100)
    email!: string

    @IsString()
    @MinLength(6)
    @MaxLength(8)
    password!: string
}
