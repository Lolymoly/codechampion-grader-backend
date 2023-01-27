import { ApiProperty } from '@nestjs/swagger';
import { Task } from '@prisma/client';

export class TaskEntity implements Task {
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
