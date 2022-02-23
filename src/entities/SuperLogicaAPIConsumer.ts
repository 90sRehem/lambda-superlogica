import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import { stringify } from "querystring"
export class SuperLogicaAPIConsumer {
    protected _app_token: string = "5b61744f-83ec-31be-b5c0-b08984bf4f99";
    protected _access_token: string = "af49c75f-37d2-3a7e-b978-d5f7ebd148aa";

    constructor(app_token?: string, access_token?: string) {
        this._app_token = app_token ?? this._app_token;
        this._access_token = access_token ?? this._access_token;
    }

    public async getActiveClients(): Promise<unknown> {
        return axios.get("https://api.superlogica.net/v2/financeiro/clientes", {
            headers: {
                app_token: this._app_token,
                access_token: this._access_token,
                "Content-Type": "application/json"
            },
            params: {
                status: 0,
            }
        })
    }

    public async getActiveContracts(): Promise<unknown> {
        return axios.get("https://api.superlogica.net/v2//recorrencias/recorrenciasdeplanos", {
            headers: {
                app_token: this._app_token,
                access_token: this._access_token,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            params: {
                tipo: "contratos",
            }
        })
    }

    public async listCustomerCharges(customersIds: number[]): Promise<any> {
        const promises = [
            Promise.resolve(1),
            Promise.reject("Eu vou falhar e arruinar tudo."),
            Promise.resolve(3),
        ];

        Promise.all(promises)
            .then((list) => {
                console.log("Result:");
                console.log(list);
            })
            .catch((error) => {
                console.log("Error:");
                console.log(error);
            });
        //    const promiseArr = Promise.allSettled()
        //     const response = await axios.get("https://api.superlogica.net/v2/financeiro/cobranca", {
        //         headers: {
        //             app_token: this._app_token,
        //             access_token: this._access_token,
        //             "Content-Type": "application/x-www-form-urlencoded"
        //         },
        //         params: {
        //             // doClienteComId: ,
        //             // "CLIENTES[0]": ,
        //             // todasDoClienteComId: ,
        //             // dtInicio: ,
        //             // dtFim: ,
        //             // todasDoClienteComIdentificador: ,
        //             // status: ,
        //             // exibirComposicaoDosBoletos: ,
        //         }
        //     })
        //     return response
    }

    public async insertCharge(): Promise<AxiosPromise> {
        const data = stringify({
            "ID_SACADO_SAC": "146",
            "COMPO_RECEBIMENTO[0][ID_PRODUTO_PRD]": "17",
            "COMPO_RECEBIMENTO[0][NM_QUANTIDADE_COMP]": "50",
            "COMPO_RECEBIMENTO[0][VL_UNITARIO_PRD]": "1000",
            "VL_EMITIDO_RECB": "5000",
            "DT_VENCIMENTO_RECB": "07/10/2019",
            "ID_FORMAPAGAMENTO_RECB": "0",
            "ST_OBSERVACAOINTERNA_RECB": "Obs int.",
            "ST_OBSERVACAOEXTERNA_RECB": "Obs ext.",
            "ID_CONTA_CB": "",
            "COBRANCA_PARCELAS[0][VL_EMITIDO_RECB]": "",
            "COBRANCA_PARCELAS[0][DT_VENCIMENTO_RECB]": "",
            "COBRANCA_PARCELAS[0][ST_OBSERVACAOEXTERNA_RECB]": "",
            "ST_NOSSONUMEROFIXO_RECB": ""
        });
        const config: AxiosRequestConfig = {
            method: "POST",
            url: "https://api.superlogica.net/v2/financeiro/cobranca",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "app_token": this._app_token,
                "access_token": this._access_token
            },
            data,
        };

        try {
            return axios(config)
        } catch (error) {
            console.log(error);
        }
    }
}