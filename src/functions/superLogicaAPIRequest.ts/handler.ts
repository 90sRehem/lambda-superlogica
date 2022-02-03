import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { SuperLogicaAPIConsumer } from 'src/entities/SuperLogicaAPIConsumer';
import { schema } from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const response = await SuperLogicaAPIConsumer.request({
    url: event.body.url,
    headers: {
      accessToken: event.headers.access_token,
      appToken: event.headers.app_token,
    },
    params: event.body.params
  })
  console.log(event.headers);

  return formatJSONResponse({
    message: "success",
    payload: response
  });
};

export const main = middyfy(hello);
