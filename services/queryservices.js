import query from '../model/query';

export default class queryService {
    static async createquery(queri) {
        const newquery = query.create(queri);
        return newquery;
    }
    static getquery() {
        const queri = query.find();
        return queri;
    }
    static getonequery(data) {
        const onequery = query.findById(data);
        return onequery;
    }

    static getremovequery(data) {
        const newquri = query.remove(data);
        return newquri;
    }

}

