const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.latest();
    });
    it('should be able to crate a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name : "APAD2",
            email : "testegmail.com",
            whatsapp : "81997529434",
            city : "Jaboatão",
            uf : "PE"
        });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})