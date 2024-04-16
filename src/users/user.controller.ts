import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./DTO/create-user";
import { UpdatePatchUserDTO } from "./DTO/update-patch-user";
import { UpdatePutUserDTO } from "./DTO/update-put-user";
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
    async update(@Body() {name, email, password} : UpdatePutUserDTO, @Param() param){
        return {
            method: 'Put',
            name, email, password,
            param
        }
    }
    @Patch(':id')
    async updatePartial(@Body() {name, email, password} : UpdatePatchUserDTO,@Param() param){
        return {
            method: 'Param',
            name, email, password,
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