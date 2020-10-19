import { IsNotEmpty, IsLatitude, IsLongitude, IsBoolean } from 'class-validator'

export class CreateOrphanageDto {
  @IsNotEmpty()
  readonly name: string

  @IsNotEmpty()
  @IsLatitude()
  readonly latitude: string

  @IsNotEmpty()
  @IsLongitude()
  readonly longitude: number

  @IsNotEmpty()
  readonly about: string

  @IsNotEmpty()
  readonly instructions: string

  @IsNotEmpty()
  readonly opening_hours: string

  @IsBoolean()
  readonly open_on_weekends?: boolean
}
