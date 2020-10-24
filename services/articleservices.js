import article from '../model/article';

export default class articleService {
    static async createArticle(articlee) {
        const newarticle = article.create(articlee);
        return newarticle;
    }
   
}