import bcrypt from 'bcrypt'
import {HashCompare} from "@application/interfaces/cryptography/HashCompare";
import {HashGenerate} from "@application/interfaces/cryptography/HashGenerate";

export class BcryptAdapter implements HashCompare, HashGenerate {
    constructor(private readonly salt: number) {
    }

    async hash(value: string): Promise<string> {
        return bcrypt.hash(value, this.salt)
    }

    async compare(plaintext: string, hash: string) : Promise<boolean>{
        return bcrypt.compare(plaintext, hash)
    }


}