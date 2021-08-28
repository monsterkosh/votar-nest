import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    constructor(){}

    async getUser(): Promise<any> {
        return {nombre: 'pedro'}
    }

    async postUser(): Promise<any> {
        return 'hola'
    }
}