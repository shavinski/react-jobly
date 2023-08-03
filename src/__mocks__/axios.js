export default {
    getCompanies: jest.fn().mockResolvedValue([
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
    ]),
    login: jest.fn().mockResolvedValue({
        token: 'mock-token'
    })
};