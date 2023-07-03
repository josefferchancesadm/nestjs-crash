import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUser } from 'src/users/Dtos/CreateUser.dto';

@Injectable()
export class CreateUserPipePipe implements PipeTransform {
  transform(value: CreateUser, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);

    const parseAgeToInt = parseInt(value.age.toString());

    if (isNaN(parseAgeToInt)) {
      console.log(`${parseAgeToInt} não é um número!`);
      throw new HttpException(
        'Inválido tipo de propriedade do age. Expectativa de numero!',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log(`${parseAgeToInt} é um numero. Retornando...`);

    return { ...value, age: parseAgeToInt };
  }
}
