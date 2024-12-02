import { UserRepository } from 'src/repository/repositories/user.repository';
import { UserRequestDto, UserResponseDto } from './dto';
import { User } from '@prisma/client';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    registerUser(userParams: UserRequestDto): Promise<UserResponseDto>;
    login(userParams: UserRequestDto): Promise<UserResponseDto>;
    updateUserById(id: string, userParams: UserRequestDto): Promise<UserResponseDto>;
    deleteUser(id: string): Promise<User>;
}
