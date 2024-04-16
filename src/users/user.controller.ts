import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./DTO/create-user";
import { UpdatePatchUserDTO } from "./DTO/update-patch-user";
import { UpdatePutUserDTO } from "./DTO/update-put-user";
@Controller('users')
export class UserController {
    @Post()
    async create(@Body() {name, email}: CreateUserDTO) {
        return {name, email};
    }
    @Get()
    async list(){
        return {users:[]}
    }
    @Get(':id')
    async show(@Param('id',ParseIntPipe) id){
        return {user:{}, id}
    }
    @Put(':id')
    async update(@Body() {name, email} : UpdatePutUserDTO, @Param('id',ParseIntPipe) param){
        return {
            method: 'Put',
            name, email,
            param
        }
    }
    @Patch(':id')
    async updatePartial(@Body() {name, email, password} : UpdatePatchUserDTO,@Param('id',ParseIntPipe) param){
        return {
            method: 'Param',
            name, email, password,
            param
        }
    }
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id){
        return {                        
            id
        }
    }
}