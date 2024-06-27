import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, Length } from "class-validator"

export class CreateSessionDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: 'example@example.com',
    description: `O email é necessário para o login, devendo ser único para cada usuário`,
  })
  email: string

  @IsNotEmpty()
  @Length(5, 30)
  @ApiProperty({
    example: '123@abc',
    description: `A senha é necessária para o login, devendo ser uma string entre 5 e 30 caracteres`,
  })
  password: string
}
