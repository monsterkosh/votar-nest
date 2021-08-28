import { Controller, Get } from '@nestjs/common';
import { HomeService } from 'src/services/HomeService';

@Controller('home')
export class HomeController {
    constructor(
        private _homeService: HomeService
    ){}

    @Get()
    async getHome() {
        let response = await this._homeService.getHome();
        return response;
    }
}
