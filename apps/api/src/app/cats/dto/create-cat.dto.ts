import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsInt()
  @ApiProperty()
  readonly age: number;

  @IsString()
  @ApiProperty()
  readonly breed: string;
}
