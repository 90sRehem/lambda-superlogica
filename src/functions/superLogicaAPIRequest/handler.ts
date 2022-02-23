import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { Go2GoConsumerAPIConsumer } from 'src/entities/Go2GoConsumerConsumer';
import { SuperLogicaAPIConsumer } from 'src/entities/SuperLogicaAPIConsumer';
import { schema } from './schema';

const superLogicaAPIConsumer = new SuperLogicaAPIConsumer()
const go2goAPIConsumer = new Go2GoConsumerAPIConsumer()

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    // const response = await superLogicaAPIConsumer.getActiveClients();
    // const response = await superLogicaAPIConsumer.insertCharge();

    return formatJSONResponse({
      message: "success",
      // payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }

};

export const main = middyfy(handler);
