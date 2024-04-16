import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./DTO/create-user";
@Controller('users')
export class UserController {
    @Post()
    async create(@Body() {name, email, password}: CreateUserDTO) {
        return {name, email};
    }
    @Get()
    async list(){
        return {users:[]}
    }
    @Get(':id')
    async show(@Param() params){
        return {user:{}, params}
    }
    @Put(':id')
    async update(@Body() body, @Param() param){
        return {
            method: 'Put',
            body,
            param
        }
    }
    @Patch(':id')
    async updatePartial(@Body() body,@Param() param){
        return {
            method: 'Param',
            body,
            param
        }
    }
    @Delete(':id')
    async delete(@Param() param){
        return {                        
            param
        }
    }
}