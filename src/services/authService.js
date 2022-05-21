const signInURL = 'https://localhost:7166/api/auth/sign-in';
const signUpURL = 'https://localhost:7166/api/auth/sign-up';

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

export const setCookie = (role) => {
    document.cookie = `role=${role}`;
}

export const getCookie = () => {
    const match = document.cookie.match(new RegExp('(^| )role=([^;]+)'));
    if (match) return match[2];
    return undefined;
}

export const clearCookie = () => {
    document.cookie = 'role=';
}

export const IsAdmin = () => getCookie() === "Admin";

export const IsOperator = () => getCookie() === "Operator";