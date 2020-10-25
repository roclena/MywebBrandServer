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
    static getoneArticle(data,ems){
        const onearticle=article.findById(data);
        if(onearticle){
            return onearticle;
        }else{
            ems="Article not found!!!!";
            return ems;
        }
    }
    static addcommet(id){
        const onearticle=article.findOneAndUpdate(
            { _id: id },
            {
              $push: {
                comment: {
                  Owner,
                  content,
                  CommentsOn: new Date(),
                },
              },
            }
        )
        return onearticle;
    }
    static getremove(data){
        const onearticle=article.remove(data);
        return onearticle;
        
    }
    static getupdate(req,_id){
        
        const onearticle=article.findByIdAndUpdate(
            _id,
            {$set:req.body}
            );
        return onearticle;
        
    }

}