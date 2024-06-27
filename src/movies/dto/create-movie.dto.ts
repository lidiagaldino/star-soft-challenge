import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, Length, isInt } from "class-validator"

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 100)
  @ApiProperty({
    example: 'Gente Grande 2',
    description: `O titulo do filme deve ter entre 2 e 100 caracteres`,
  })
  name: string
  @IsNotEmpty()
  @IsString()
  @Length(2, 1000)
  @ApiProperty({
    example: 'Lenny decides to move to his hometown with his family and friends. On his arrival at the hometown, he faces many comical situations while his friends struggle to cope with their own issues.',
    description: `A descrição do filme deve ter entre 2 e 1000 caracteres`,
  })
  description: string
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @IsPositive()
  @ApiProperty({
    example: 2013,
    description: `O ano do filme deve ser um numero inteiro positivo`,
  })
  year: number
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    example: 5,
    description: `A nota do filme deve ser um numero inteiro positivo`,
  })
  rating: number
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    example: 1,
    description: `A duração do filme deve ser um numero positivo`,
  })
  duration: number
}
