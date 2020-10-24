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
        return res.json({
            Articles: uarticle
        });
    }
    static async onearticles(req, res) {
        const {_id}=req.params;
        const uarticle = await article.getoneArticle({_id});
        
        return res.json({
            Articles: uarticle
        });
    }
}
