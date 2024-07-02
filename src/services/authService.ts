import { AuthData } from "../contexts/Auth";

async function signIn(email: string, password: string): Promise<AuthData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password === '123456') {
                resolve({
                    token: 'fake-token-jwt',
                    email: email,
                    name: 'jpcadinelli',
                });
            } else {
                reject(new Error(`Invalid email or password: ${password}`));
            }
        }, 500)
    });
}

export const authService = {signIn};
