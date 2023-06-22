export type UserProps = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
}

export class User{
    public readonly id: string

    public readonly firstName: string

    public readonly lastName: string

    public readonly email: string

    public readonly password: string

    public readonly createdAt: Date

    public readonly updatedAt?: Date

    constructor(props: UserProps) {
        this.id = props.id
        this.firstName = props.firstName
        this.lastName = props.lastName
        this.email = props.email
        this.password = props.password
        this.createdAt = props.createdAt
        this.updatedAt = props.updatedAt
    }
}