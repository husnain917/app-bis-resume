// /lib/config.js

export const config = provider => ({
    client: {
        id: client[provider].id,
        secret: client[provider].secret
    },
    auth: {
        tokenHost: auth[provider].tokenHost,
        tokenPath: auth[provider].tokenPath,
        authorizePath: auth[provider].authorizePath
    }
});

const auth = {
    github: {
        tokenHost: "https://github.com",
        tokenPath: "/login/oauth/access_token",
        authorizePath: "/login/oauth/authorize"
    },
};

const client = {
    github: {
        id: '1869573d24435b0dc26b',
        secret: '46b400f6f30105d2d70038390512ee0dae93d5f6'
    }
};