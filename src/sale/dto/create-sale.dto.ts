import { IsNumber, IsPositive } from "class-validator";
export class CreateSaleDto {
  @IsNumber()
    @IsPositive()
  autoId: number;

  @IsNumber()
  @IsPositive()
  clientId: number
 }
