const signInURL = 'https://localhost:7166/api/auth/sign-in';
const signUpURL = 'https://localhost:7166/api/auth/sign-up';
const getLastEnterURL = 'https://localhost:7166/api/auth/get-last-enter?login=';

export const signIn = async(data) => {
    return await (await fetch(signInURL,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })).json();
}

export const signUp = async(data) => {
    return await (await fetch(signUpURL,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })).json();
}

export const setCookie = (name, value) => {
    document.cookie = `${name}=${value}`;
}

export const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return undefined;
}

export const clearCookie = () => {
    document.cookie = 'role=';
    document.cookie = 'login=';
}

export const IsAdmin = () => getCookie('role') === "Admin";

export const IsOperator = () => getCookie('role') === "Operator";

export const getLastEnter = async(login) => {
    return await (await fetch(getLastEnterURL + login)).text();
}