import { rest } from 'msw'

export const handlers = [
    rest.post('localhost:3000/auth/token', (req, res, ctx) => {
        const { username, password } = req.body;
        console.log('user', username, 'pass', password);

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
                    "error": {
                        "message": "Invalid username/password",
                        "status": 401
                    }
                })
            )
        }
    }),
    rest.get('/companies/:handle', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "company": {
                    "handle": "test-handle",
                    "name": "Test Name",
                    "description": "Test",
                    "numEmployees": 1,
                    "logoUrl": null,
                    "jobs": []
                }
            })
        )
    }),

]