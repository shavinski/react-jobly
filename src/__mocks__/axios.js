export default {
    getCompanies: jest.fn().mockResolvedValue({ data: {} }),
    login: jest.fn().mockResolvedValue({
        token: 'mock-token'
    })
};