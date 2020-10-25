import article from '../services/articleservices';

export default class findarticle {
    static async findexistance(binput) {
        const articlee = await article.getoneArticle(binput);
        if(articlee){
            re
        }
    }
}