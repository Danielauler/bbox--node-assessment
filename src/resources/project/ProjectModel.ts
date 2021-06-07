import { IsString, ValidateNested  } from 'class-validator';
import { Type } from 'class-transformer';
import User from "@entity/User";

export class ProjectModel {
  readonly uuid: string;

  @ValidateNested()
  @Type(() => User)
  owner: User;

  @IsString()
  description: string;

  @IsString()
  creationDate: Date;
}