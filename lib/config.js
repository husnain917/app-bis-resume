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
        id: process.env.NEXT_PUBLIC_OAUTH_GITHUB_CLIENT_ID,
        secret: process.env.NEXT_PUBLIC_OAUTH_GITHUB_CLIENT_SECRET
    }
};