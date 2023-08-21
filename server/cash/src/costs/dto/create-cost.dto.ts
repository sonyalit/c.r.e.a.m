import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCostDto {
  @IsNotEmpty()
  readonly text: string;
  @IsNotEmpty()
  readonly price: number;
  @IsOptional()
  readonly category: string;
  @IsNotEmpty()
  readonly date: Date;
  @IsOptional()
  readonly userId: string;
}
