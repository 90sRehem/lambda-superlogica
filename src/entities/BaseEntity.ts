import axios from 'axios';

type IRequestHeaders = {
    appToken: string;
    accessToken: string;
}

interface IRequest {
    url: string;
    headers: IRequestHeaders;
    params: {};
}

export abstract class BaseEntity {
    static async request({
        url,
        headers,
        params }: IRequest) {
        try {
            const response = await axios.get(url, {
                headers: {
                    app_token: headers.appToken,
                    access_token: headers.accessToken,
                    'Content-Type': 'application/json'
                },
                params
            })

            return response.data;
        } catch (error) {
            const errorMessage = { message: error }
            return new Error(JSON.stringify(errorMessage))
        }
    };
};