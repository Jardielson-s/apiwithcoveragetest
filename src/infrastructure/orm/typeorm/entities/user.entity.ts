import { Entity, Column, PrimaryColumn } from 'typeorm'
import { v4 } from 'uuid'

import { Status } from '../../../../domain/enums/create-user.enum'

@Entity()
export class User {
    @PrimaryColumn('uuid')
    id?: string = v4().replace(/\-/g, '')

    @Column({
        length: 100,
    })
    name!: string

    @Column('text')
    email!: string

    @Column('text')
    password!: string

    @Column('text')
    status?: Status = Status.PROCESS
}
