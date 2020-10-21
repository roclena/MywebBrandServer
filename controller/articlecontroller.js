import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import article from '../Model/article';


class articlecontroller {
    static createarticle(req, res) {
        if (!req.body.Title) {
            return res.status(400).send({
                status: 400,
                message: 'Title is required!!',
            });
        }
        if (!req.body.Subject) {
            return res.status(400).send({
                status: 400,
                message: ' subject is required!!',
            });
        } 
        const newarticle = new article({
            Title: req.body.Title,
            Subject: req.body.Subject,
            createdate:Date.now           
        });
              
     try {
    const a = newarticle.save((err) => {
        if (err) throw err;

        res.json({
            status: 201,
            message: 'New article Posted',
            data: newarticle
        });
    });
} catch (e) {}


}
static getArticles(req, res) {
    article.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                status: 200,
                data: result
            });
        }
    });
}
static getoneArticle(req, res) {
    article.findOne({Title:req.params}).exec((err, article) => {

        if (article) {
            res.status(400).send({ article });
            return;
        } else {
            res.status(500).send('Article not found');
            return;
        }
    });

}

}

export default articlecontroller;