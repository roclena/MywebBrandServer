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
    static getoneArticle(data, ems) {
        const onearticle = article.findById(data);
        if (onearticle) {
            return onearticle;
        } else {
            ems = "Article not found!!!!";
            return ems;
        }
    }
    static addcommet(id) {
        const onearticle = article.findOneAndUpdate(
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
    static getremove(data) {
        const onearticle = article.remove(data);
        return onearticle;

    }
    static getupdate(req, id, Title, Subject) {
        

        const onearticle = article.updateOne({
            Title: req.body.Title,
            Subject: req.body.Subject
        }, (err) => {
            if (err) {
                throw err;
            } else {
                return onearticle;
            }
        });

    }

}