import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { UserService } from "src/services/UserService";

@Controller('core/api')
export class UserController {
    constructor(
        private _userService: UserService
    ){}

    @Get()
    async getUser(): Promise<any> {
        return await this._userService.getUser();
    }

    @Post()
    async postUser(body: object): Promise<any> {
        return {}
    }
}