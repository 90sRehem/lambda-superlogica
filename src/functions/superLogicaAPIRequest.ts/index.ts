import { schema } from './schema';
import { handlerPath } from '@libs/handler-resolver';

export const superLogicaAPIRequestFn = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'superlogica_lambda',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
