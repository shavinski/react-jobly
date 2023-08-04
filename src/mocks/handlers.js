import { rest } from 'msw'

const BASE_URL = 'http://localhost:3001'

export const handlers = [
    // Handles a POST /login request
    rest.post(`${BASE_URL}/auth/token`, async (req, res, ctx) => {
        const arrayBuffer = await req.arrayBuffer();

        // Assuming the ArrayBuffer contains UTF-8 encoded JSON data, you can parse it as follows:
        const jsonText = new TextDecoder().decode(arrayBuffer);
        const jsonData = JSON.parse(jsonText);
        console.log('jsonText', jsonText);
        // Now you can access the data from the request body
        const { username, password } = jsonData;
        console.log('\n','username', username, 'password', password, '\n');
        if (username !== "testuser") {
            return res(
                ctx.status(400),
                ctx.json({
                    "error": {
                        "message": "Invalid username/password",
                        "status": 401
                    }
                })
            )
        }
        return res(
            ctx.status(200),
            ctx.json({
                token: 'mock-token'
            })
        )
    }),

]