import { rest } from 'msw'

const BASE_URL = 'http://localhost:3001'

export const handlers = [
    // Handles a POST /login request
    rest.post(`${BASE_URL}/auth/token`, async (req, res, ctx) => {
        const arrayBuffer = await req.arrayBuffer();

        // Assuming the ArrayBuffer contains UTF-8 encoded JSON data, you can parse it as follows:
        const jsonText = new TextDecoder().decode(arrayBuffer);
        const jsonData = JSON.parse(jsonText);
        // Now you can access the data from the request body
        const { username, password } = jsonData;
        // if (username !== "testuser") {
        //     return res(
        //         ctx.status(400),
        //         ctx.json({
        //             "error": {
        //                 "message": "Invalid username/password",
        //                 "status": 401
        //             }
        //         })
        //     )
        // }
        return res(
            ctx.status(200),
            ctx.json({
                token: 'mock-token'
            })
        )
    }),

    rest.get(`${BASE_URL}/companies`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "company": {
                    "handle": "test-handle",
                    "name": "test-name",
                    "description": "test-description",
                    "numEmployees": 1,
                    "logoUrl": '',
                    "jobs": [
                        {
                            "id": 1,
                            "title": "test-title",
                            "salary": 130000,
                            "equity": "0"
                        }
                    ]
                }
            })
        )
    })

]