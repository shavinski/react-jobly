import { rest } from 'msw'

const BASE_URL = 'http://localhost:3001'

export const handlers = [
    // Handles a POST /login request
    rest.post(`${BASE_URL}/auth/token`, async (req, res, ctx) => {
        // const arrayBuffer = await req.arrayBuffer();
        // const jsonText = new TextDecoder().decode(arrayBuffer);
        // const jsonData = JSON.parse(jsonText);
        // const { username, password } = jsonData;

        // if (username !== "testuser" && password !== "testpassword") {
        //     return res(
        //         ctx.status(200),
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

    rest.post(`${BASE_URL}/auth/register`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                token: 'mock-token'
            })
        )
    }),

    // rest.patch(`${BASE_URL}/users/:username`, async (req, res, ctx) => {
    //     return res(
    //         ctx.status(200),
    //         ctx.json({
    //             token: 'mock-token'
    //         })
    //     )
    // }),

    rest.get(`${BASE_URL}/users/:username`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "user": {
                    "username": "fake-user",
                    "firstName": "fake",
                    "lastName": "user",
                    "email": "fake@user.com",
                    "isAdmin": false,
                    "applications": [
                        1
                    ]
                }
            })
        )
    }),

    rest.get(`${BASE_URL}/companies`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                companies: [
                    {
                        "handle": "test-handle1",
                        "name": "test-name1",
                        "description": "test-desc1",
                        "numEmployees": 1,
                        "logoUrl": null
                    }
                ]
            })
        )
    }),

    rest.get(`${BASE_URL}/companies/:handle`, (req, res, ctx) => {
        const { handle } = req.params
        return res(
            ctx.status(200),
            ctx.json({
                "company": {
                    "handle": handle,
                    "name": "test-name1",
                    "description": "test-desc1",
                    "numEmployees": 1,
                    "logoUrl": null,
                    "jobs": [
                        {
                            "id": 1,
                            "title": "fake-job-title",
                            "salary": 1,
                            "equity": "0"
                        }
                    ]
                }
            })
        )
    }),

    rest.get(`${BASE_URL}/jobs`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "jobs": [
                    {
                        "id": 1,
                        "title": "fake-job-title1",
                        "salary": 1,
                        "equity": "2",
                        "companyHandle": "fake-handle1",
                        "companyName": "fake-name1"
                    },
                    {
                        "id": 2,
                        "title": "fake-job-title2",
                        "salary": 2,
                        "equity": "2",
                        "companyHandle": "fake-handle2",
                        "companyName": "fake-name2"
                    },
                ]
            })
        )
    }),

    rest.get(`${BASE_URL}/jobs/:id`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "job": {
                    "id": 1,
                    "title": "Conservator, furniture",
                    "salary": 110000,
                    "equity": "0",
                    "company": {
                        "handle": "watson-davis",
                        "name": "Watson-Davis",
                        "description": "Year join loss.",
                        "numEmployees": 819,
                        "logoUrl": "/logos/logo3.png"
                    }
                }
            })
        )
    }),


]