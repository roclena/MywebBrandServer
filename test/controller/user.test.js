import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import usertest from '../data/userdata';

chai.use(chaiHttp);

const { user1, userLogin, userEmpty, user1wrongcredetianls } = usertest;

describe('User Test', () => {
    
  it('Should create a user',(done) => {
       chai
      .request(app)
      .post('/api/signup')
      .send(user1)
      .end((err, res) => {
        if(err)done(err);
        const {message } = res.body;
        expect(res.status).to.equal(201);        
        expect(message);                  
        done();
      })
      
  });
  it('Should not duplicate user by same email', (done) => {
    chai
      .request(app)
      .post('/api/v1/signup')
      .send(user1)
      .end((err, res) => {
        const {message } = res.body;
        expect(res.status).to.equal(404);
        expect(message);
        done();
      });
  });
  it('Login user by email', (done) => {
    chai
      .request(app)
      .post('/api/login')
      .send(userLogin)
      .end((err, res) => {
        const {token, message } = res.body;
        expect(res.status).to.equal(200);
        expect(message);
        expect(token);
        done();
      });
  });
  it('Should not allow user by wrong email', (done) => {
    chai
      .request(app)
      .post('/api/login')
      .send(user1wrongcredetianls)
      .end((err, res) => {
        const { token, message } = res.body;
        expect(res.status).to.equal(400);
        expect(message);
        done();
      });
  });
  it('Should not allow user to log in with wrong credentials', (done) => {
    chai
      .request(app)
      .post('/api/signup')
      .send(userEmpty)
      .end((err, res) => {
        const { token, message } = res.body;
        expect(res.status).to.equal(400);
        expect(message);
        done();
      });
  });
});