import { RolesEnum } from 'src/enum/roles.enum';
export declare class UserDto {
    id: string;
    name: string;
    password: string;
    role?: RolesEnum;
}
