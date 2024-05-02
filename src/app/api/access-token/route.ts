import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

const handler = withApiAuthRequired(async () =>{
    const { accessToken} = await getAccessToken();
    return Response.json({accessToken});
});
export const GET = handler
