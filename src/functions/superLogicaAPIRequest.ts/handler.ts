import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { SuperLogicaAPIConsumer } from 'src/entities/SuperLogicaAPIConsumer';
import { schema } from './schema';

const consumer = new SuperLogicaAPIConsumer(
  "https://api.superlogica.net/v2/financeiro/recorrencias/recorrenciasdeplanos",
  "5b61744f-83ec-31be-b5c0-b08984bf4f99",
  "af49c75f-37d2-3a7e-b978-d5f7ebd148aa"
)

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const response = await consumer.request({
    tipo: 'contratos',
    gridMensalidadesAgrupadasPorPlano: true,
    semTrial: true,
    pagina: 1,
    itensPorPagina: 5
  })

  return formatJSONResponse({
    // message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    message: "success",
    payload: response
  });
};

export const main = middyfy(hello);
