import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { PetsException } from '../../exception/note.exception/pet.exception';

@Catch(PetsException)
export class PetsExceptionFilter implements ExceptionFilter {
  catch(exception: PetsException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    response.status(500).json({
      timestamp: new Date().toISOString(),
      msg: exception.what(),
    });
  }
}
