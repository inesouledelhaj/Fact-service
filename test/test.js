//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);


describe('calculate factorial', () => {
  it('it should return 120 for factorial of 5', (done) => {
    chai.request(server)
        .get('/factorial/5')
        .end((err, res) => {
              res.should.have.status(200);
              res.text.should.be.eql('120');
          done();
        });
  });
});