import axios from 'axios';

export abstract class BaseEntity {
    public url: string;
    public app_token: string;
    public access_token: string;

    public async request(params = {}) {
        const headers = {
            'Content-Type': 'application/json',
            'app_token': this.app_token,
            'access_token': this.access_token
        }

        try {
            const response = await axios.get(this.url, {
                headers,
                params
            })

            return response.data;
        } catch (error) {
            return new Error(JSON.stringify(error))
        }
    };

    constructor(url: string, appToken: string, accessToken: string) {
        this.url = url;
        this.app_token = appToken;
        this.access_token = accessToken;
    };
};