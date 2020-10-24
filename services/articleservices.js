import article from '../model/article';

export default class articleService {
    static async createArticle(articlee) {
        const newarticle = article.create(articlee);
        return newarticle;
    }
    static getArticles() {
        
        const articlee = article.find();
        return articlee;
    }
    static getoneArticle(data){
        const onearticle=article.findById(data);
        if(onearticle){
            return onearticle;
        }
    }

}