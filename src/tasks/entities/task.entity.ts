import { ApiProperty } from '@nestjs/swagger';

export class TaskEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  timeLimit: number;

  @ApiProperty()
  memoryLimit: number;

  @ApiProperty()
  pdfLink: string;
}
