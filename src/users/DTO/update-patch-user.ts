import { CreateUserDTO } from "./create-user";
import {PartialType} from '@nestjs/mapped-types';
export class UpdatePatchUserDTO extends PartialType(CreateUserDTO){
}