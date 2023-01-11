// /pages/api/auth.js

import { AuthorizationCode } from "simple-oauth2";
import { randomBytes } from "crypto";
import { config } from "../../lib/config";
import { scopes } from "../../lib/scopes";

export const randomString = () => randomBytes(4).toString("hex");

export default async (req, res) => {
    const { host } = req.headers;
    const url = new URL(`https://${host}/${req.url}`);
    const urlParams = url.searchParams;
    const provider = urlParams.get("provider");

    // simple-oauth will use our config files to generate a client we can use to request access
    const client = new AuthorizationCode(config(provider));

    // we then make a build the request to our provider
    const authorizationUri = client.authorizeURL({
        // your callback url is important! More on this later
        redirect_uri: `https://${host}/api/callback?provider=${provider}`,
        scope: scopes[provider],
        state: randomString()
    });

    // and get redirected to Github for authorisation
    res.writeHead(301, { Location: authorizationUri });
    res.end();
};
// This renders a simple page with javascript that allows the pop-up page
// to communicate with its opener 
function renderBody(status, content) {
    return `
      <script>
        const receiveMessage = (message) => {
          window.opener.postMessage(
            'authorization:${content.provider}:${status}:${JSON.stringify(
        content
    )}',
            message.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:${content.provider}", "*");
      </script>
    `;
}