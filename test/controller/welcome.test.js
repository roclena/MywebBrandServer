import chai,{expect} from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();
describe('Welcome to backend test',()=>{
    it('should return a message of api connection',(done)=>{
        chai
           .request(app)
           .get('/')
           .end((err,res)=>{
                if(err)done(err);
                const {message}=res.body;
                expect(res.status).to.equal(200);
                expect(message);
                expect(message).to.equal('Welcome to my web Brand!!!!!');
                done();
           });
    });

});