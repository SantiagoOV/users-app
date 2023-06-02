import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('create-user')
  createUser(@Body() newUser: CreateUserDto): Promise<User> {
    return this.userService.createUser(newUser);
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.getUser(id);
  }

  @Delete('delete-user/:id')
  deleteData(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteData(id);
  }

  @Patch('update-user/:id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ) {
    const dataUser = user;
    dataUser.updateAt = new Date();
    this.userService.updateUser(id, dataUser);
    return dataUser;
  }
}
