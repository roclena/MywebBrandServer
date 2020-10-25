import article from '../services/articleservices';

export default class ArticleServices {
    static async postArticle(req, res) {
        const inputFormData = req.body;
        const particle = await article.createArticle(inputFormData);
        return res.json({
            status: 201,
            message: "Article Posted"
        })
    }
    static async articles(req, res) {
        const uarticle = await article.getArticles();
        if(uarticle){
            return res.json({
                Articles: uarticle
            });
        }else{
            res.json({
                status:404,
                message:"Article not found"
            })
        }
    }
    static async onearticles(req, res) {
        const {_id}=req.params;
        const mess="Article not found..!!"
        const uarticle = await article.getoneArticle({_id},mess);
        
        return res.json({
            Articles: uarticle
        });
    
    }
    static async commentarticle(req,res){
        let { _id } = req.params;
    let content = req.body.content;
    let { Firstname, Lastname } = req.userData.generate;
    let Owner = `${Firstname} ${Lastname}`;
    try {
      await article.addcommet(_id, Owner, content)
        .then((article) => {
          if (article)
            return res.status(201).json({
              Message: "Comment successfully added",
              article,
            });
          return res.status(404).json({
            Message: "Resource not found",
          });
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    } catch (error) {
      res.status(400).send(error);
    }
  
    }
    static async Removearticles(req, res) {
        const {_id}=req.params;
        const uarticle = await article.getremove({_id});
        if(uarticle){
            return res.json({
                status:301,
                message:"Article not found"
            });
        }else{
            res.json({
                status:404,
                message:"Article not found"
            })
        }
    }
    static async updateArticle(req,res){
        const {_id}=req.params;
        
        const updateart=await article.getupdate({_id});
        return res.json({
            status:200,
            message:'article updated',
            updateart
        })
    }
}
