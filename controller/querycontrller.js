/*import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import query from '../db/query';


class querycontroller {
    static createquery(req, res) {
        if (!req.body.firstName) {
            return res.status(400).send({
                status: 400,
                message: 'First Name is required!!',
            });
        }
        if (!req.body.lastName) {
            return res.status(400).send({
                status: 400,
                message: 'Last Name is required!!',
            });
        }
        if (!req.body.email) {
            return res.status(400).send({
                status: 400,
                message: 'email is required!!',
            });
        }
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
                const newquery = new query({
                    senderFirstName:req.body.firstName,
                    senderLastName:req.body.lastName,
                    senderEmail:req.body.email,
                    Title: req.body.Title,
                    Subject: req.body.Subject                              
                });
                      
             try {
            const a = newquery.save((err) => {
                if (err) throw err;
        
                res.json({
                    status: 201,
                    message: 'New query sent successfull',
                    data: newquery
                });
            });
        } catch (e) {}         


}
static getquery(req, res) {
    query.find({}, (err, result) => {
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
static getonequery(req, res) {
    const {_id}=req.params;
    query.findById({_id}).exec((err, article) => {

        if (article) {
            res.status(400).send({ article });
            return;
        } else {
            res.status(500).send('query not found');
            return;
        }
    });

}
static updatequery(req, res) {
    const {_id}=req.params;
    query.findById({_id}).exec((err, queri) => {

        if (!queri) {
            res.status(400).send("query not found");
            return;
        } else {              
         try {
        const a = queri.updateOne({senderFirstName:req.body.firstName,
                                   senderLastName:req.body.lastName,
                                    senderEmail:req.body.email,
                                    Title: req.body.Title,
                                     Subject: req.body.Subject   

                                     },(err) => {
            if (err) throw err;
    
            res.json({
                status: 201,
                message: 'Query updated',
                data: queri
            });
        });
    } catch (e) {}
            
        }
    });
    
}
static deletequery(req,res){
    const{_id}=req.params;
    query.findById({_id}).exec((err, articlee) => {

        if (!articlee) {
            res.status(400).send("query not found");
            return;
        } else {              
         try {
        const a = articlee.remove((err) => {
            if (err) throw err;
    
            res.json({
                status: 201,
                message: 'query deleted',
                
            });
        });
    } catch (e) {}
            
        }
    });

}

}

export default querycontroller;*/