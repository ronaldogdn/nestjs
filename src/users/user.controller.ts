import {Controller, Post, Body} from "@nestjs/common";
@Controller('users')
export class UserController {
    @Post()
    async create(@Body() body) {
        return {};
    }
}