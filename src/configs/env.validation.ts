import { plainToInstance } from 'class-transformer';
import {
  IsEnum,
  IsString,
  IsNumber,
  validateSync,
  IsOptional,
} from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  @IsOptional()
  NODE_ENV?: Environment;

  @IsString()
  MONGO_LOGIN: string;

  @IsString()
  MONGO_PASSWORD: string;

  @IsString()
  MONGO_HOST: string;

  @IsNumber()
  @IsOptional()
  MONGO_PORT: number;

  @IsString()
  MONGO_AUTHDATABASE: string;

  @IsString()
  JWT_SECRET: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
