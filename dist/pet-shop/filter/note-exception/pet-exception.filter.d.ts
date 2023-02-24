import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { PetsException } from '../../exception/note.exception/pet.exception';
export declare class PetsExceptionFilter implements ExceptionFilter {
    catch(exception: PetsException, host: ArgumentsHost): void;
}
