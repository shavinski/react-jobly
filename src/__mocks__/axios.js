export default {
    getCompanies: jest.fn().mockResolvedValue([
        {
            handle: 'test-handle1',
            name: 'test company1',
            description: 'test1 description',
            numEmployees: 1,
            logoUrl: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png'
        },
        {
            handle: 'test-handle2',
            name: 'test company2',
            description: 'test2 description',
            numEmployees: 2,
            logoUrl: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png'
        }
    ]),
    login: jest.fn().mockResolvedValue({
        token: 'mock-token'
    })
};