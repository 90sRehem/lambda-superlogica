import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { SuperLogicaAPIConsumer } from 'src/entities/SuperLogicaAPIConsumer';
import { schema } from './schema';

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const response = await SuperLogicaAPIConsumer.request({
    url: event.body.url,
    headers: {
      accessToken: event.headers.access_token,
      appToken: event.headers.app_token,
    },
    params: event.body.params
  })

  return formatJSONResponse({
    message: "success",
    payload: response
  });
};

export const main = middyfy(handler);
