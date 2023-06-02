import { IsNotEmpty, IsDate } from 'class-validator';

export class UpdateUserDto {
  name?: string;
  lasName?: string;
  email?: string;
  @IsNotEmpty()
  @IsDate()
  updateAt: Date;
}
