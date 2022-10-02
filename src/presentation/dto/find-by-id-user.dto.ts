import { IsString, MaxLength, MinLength } from 'class-validator'

export class FindByIdUserDto {
    @IsString()
    @MinLength(4)
    @MaxLength(100)
    id!: string
}
