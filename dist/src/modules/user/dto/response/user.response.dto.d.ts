import { User } from '@prisma/client';
import { RolesEnum } from 'src/enum/roles.enum';
export declare class UserResponseDto {
    id: string;
    name: string;
    password: string;
    role?: RolesEnum;
    static mapFrom(data: User): UserResponseDto;
    static mapFromMulti(data: User[]): UserResponseDto[];
}
