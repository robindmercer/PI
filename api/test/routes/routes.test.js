const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Breed, conn } = require('../../src/db.js');
var supertest = require('supertest-as-promised')(require('../../src/app.js'))

// ejemplo de teste de routes
describe('Breed routes', () => {
    before(() => conn.authenticate()
      .catch((err) => {
        console.err('Unable to connect to database:', err);
        beforeEach(() => Breed.sync({ force: true })
          .then(() => Breed.create(dog)));
  
        describe('GET/dogs', () => {
          it('should get 200', () =>
            agent.get('/dogs').expect(200)
          );
        })
      })
    )
  })

  