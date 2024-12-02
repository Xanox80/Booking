import { UserService } from './user.service';
import { UserResponseDto } from './dto';
import { UserUpdataRequestDto } from './dto/request/user-updata-request.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    registerUser(authParams: UserResponseDto): Promise<UserResponseDto>;
    loginUser(authParams: UserResponseDto): Promise<UserResponseDto>;
    updateUser(id: string, userParams: UserUpdataRequestDto): Promise<UserResponseDto>;
    deleteUser(id: string): void;
}
