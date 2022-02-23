import axios, { AxiosRequestConfig } from "axios";

export class Go2GoConsumerAPIConsumer {
    protected _email = "jonathan.rehem@hyperlocal.com.br";
    protected _password = "Fatura@2022";
    private _access_token: string;

    constructor(email?: string, password?: string) {
        this._email = email ?? this._email;
        this._password = password ?? this._password;
    }

    public async login() {
        const config: AxiosRequestConfig = {
            method: "POST",
            url: "https://api.go2gosolutions.com.br/api/auth/usuarios",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                email: this._email,
                senha: this._password,
            },
        };

        try {
            const response = await axios(config)
            this._access_token = response.data.data.access_token
        } catch (error) {
            console.log(error)
        }
    }

}