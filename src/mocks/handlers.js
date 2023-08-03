import { rest } from 'msw'
import { json } from 'stream/consumers';
import { TextDecoder } from 'util';

const BASE_URL = 'http://localhost:3001'

export const handlers = [
    rest.post(`${BASE_URL}/auth/token`, (req, res, ctx) => {
        const uint8Array = new Uint8Array(req._body);
        const decoder = new TextDecoder('utf-8');
        const jsonString = decoder.decode(uint8Array);

        const { username, password } = JSON.parse(jsonString);
        console.log(username);

        if (username === 'test123' && password === 'password') {
            return res(
                ctx.status(200),
                ctx.json({
                    token: 'mock-token'
                }))
        } else {
            return res(
                ctx.status(401),
                ctx.json({
                    error: {
                        message: "Invalid username/password",
                        status: 401
                    }
                })
            )
        }
    }),
    rest.get(`${BASE_URL}/companies`, (req, res, ctx) => {

        return res(
            ctx.status(200),
            ctx.json({
                companies: [
                    {
                        "handle": "test-handle1",
                        "name": "Test Name1",
                        "description": "Test1",
                        "numEmployees": 1,
                        "logoUrl": null,
                        "jobs": []
                    },
                    {
                        "handle": "test-handle2",
                        "name": "Test Name2",
                        "description": "Test2",
                        "numEmployees": 1,
                        "logoUrl": null,
                        "jobs": []
                    }
                ]
            })
        )
    }),

]