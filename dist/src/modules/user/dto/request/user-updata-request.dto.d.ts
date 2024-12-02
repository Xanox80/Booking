import { RolesEnum } from 'src/enum/roles.enum';
export declare class UserUpdataRequestDto {
    id: string;
    name: string;
    password: string;
    role?: RolesEnum;
}
