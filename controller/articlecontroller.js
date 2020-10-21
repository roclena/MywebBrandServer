import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import article from '../Model/article';


class articlecontroller {
    static createarticle(req, res) {
        if (!req.body.Title) {
            return res.status(400).send({
                status: 400,
                message: 'Email is title',
            });
        }
        if (!req.body.Subject) {
            return res.status(400).send({
                status: 400,
                message: 'First Name is subject',
            });
        } 
        const newarticle = new article({
            Title: req.body.Title,
            Subject: req.body.Subject,
            createarticle:new Date()            
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
}

export default articlecontroller;