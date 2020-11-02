import query from '../services/queryservices';

export default class ArticleServices {
    static async senquery(req, res) {
        const inputFormData = req.body;
        let {userData}=req;
        const sentqueries={
          senderFirstName: userData.generate.firstName,
          senderLastName:userData.generate.lastName,
          senderEmail:userData.generate.email,
          Subject:inputFormData.Subject,
          Mail:inputFormData.Mail
        }
        const sentquery = await query.createquery(sentqueries);
        return res.status(201).json({
            status: 201,
            message: "query sent !!!!"            
        })
    }
    static async senqueryform(req, res) {
        const inputFormData = req.body;       
        const sentquery = await query.createquery(inputFormData);
        return res.status(201).json({
            status: 201,
            message: "query sent !!!!"            
        })
    }
    static async query(req, res) {
        const newquery = await query.getquery();       
            return res.json({
                queries:newquery
            });
        
    }
    static async onequery(req, res) {
        const {_id}=req.params;        
        const getonequery = await query.getonequery({_id});        
        return res.json({
            Query:getonequery
        });
    
    }
   
    static async Deletequery(req, res) {
        const {_id}=req.params;
        const dquery= await query.getremovequery({_id});        
            return res.status(301).json({
                status:301,
                message:"Query Deleted !!!!"
            });
        
    }
}