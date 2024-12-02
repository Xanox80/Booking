import { User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { UserDto, UserRequestDto } from 'src/modules/user';
import { UserUpdataRequestDto } from 'src/modules/user/dto/request/user-updata-request.dto';
export declare class UserRepository {
    private readonly prisma;
    findById(id: string): void;
    constructor(prisma: PrismaService);
    register(data: UserDto): Promise<User>;
    private generateTokenPair;
    login(userParams: UserRequestDto): Promise<User>;
    updateRtHash(userId: string, refresh_token: string): Promise<void>;
    updateUserById(id: string, userParams: UserUpdataRequestDto): Promise<User>;
    deleteUser(id: string): Promise<User>;
}
