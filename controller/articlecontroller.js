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
}
