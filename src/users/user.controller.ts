import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./DTO/create-user";
import { UpdatePatchUserDTO } from "./DTO/update-patch-user";
import { UpdatePutUserDTO } from "./DTO/update-put-user";
import { UserService } from './user.service';
@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService){

    }

    @Post()
    async create(@Body() data: CreateUserDTO) {
        return this.userService.create(data);
    }
    @Get()
    async list(){
        return this.userService.list();
    }
    @Get(':id')
    async show(@Param('id',ParseIntPipe) id){
        return this.userService.show(id);
    }
    @Put(':id')
    async update(@Body() data : UpdatePutUserDTO, @Param('id',ParseIntPipe) id){
        return this.userService.update(id,data);
    }
    @Patch(':id')
    async updatePartial(@Body() data : UpdatePatchUserDTO,@Param('id',ParseIntPipe) id){
        return this.userService.updatePartial(id,data);
    }
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id){
        return this.userService.delete(id);
    }
}