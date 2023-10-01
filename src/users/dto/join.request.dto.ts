import { ApiProperty } from "@nestjs/swagger";

export class JoinRequestDto {
  @ApiProperty({
    example: 'hunit612@gmail.com',
    description: 'email',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: 'hunit612',
    description: 'nickname',
    required: true,
  })
  public nickname: string;

  @ApiProperty({
    example: 'test1234',
    description: 'password',
    required: true,
  })
  public password: string;
}