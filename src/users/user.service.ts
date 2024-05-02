import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./DTO/create-user";
import { UpdatePutUserDTO } from "./DTO/update-put-user";
import { UpdatePatchUserDTO } from "./DTO/update-patch-user";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService){}
    async create({email,name,password}:CreateUserDTO){
        return await this.prisma.user.create({
            data:{
                email: email,
                name: name, 
                password: password
            }
        });
    }
    async list(){
        return this.prisma.user.findMany();
    }
    async show(id:number){
        return this.prisma.user.findUnique({
            where:{
                id
            }
        });
    }
    async update(id:number, data: UpdatePutUserDTO){
        return this.prisma.user.update({
            data,
            where:{
                id
            }
        });
    }
    async updatePartial(id:number, data: UpdatePatchUserDTO){
        return this.prisma.user.update({
            data,
            where:{
                id
            }
        });
    }
}