import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import user from '../Model/user';


class usercontroller {
    static createUser(req, res) {
        if (!req.body.email) {
            return res.status(400).send({
                status: 400,
                message: 'Email is required',
            });
        } if (!req.body.firstName) {
            return res.status(400).send({
                status: 400,
                message: 'First Name is required',
            });
        } if (!req.body.lastName) {
            return res.status(400).send({
                status: 400,
                message: 'Last Name is required',
            });
        } if (!req.body.password || req.body.password.length < 7) {
            return res.status(400).send({
                status: 400,
                message: 'password  is required and should be a minimum of 8charachers',
            });
        }
        user.findOne({ email: req.body.email }).exec((err, nuser) => {
            if (!nuser) {

                const instance = new user({                    
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password
                });
                jwt.sign({ instance }, 'protect', { expiresIn: '1h' }, (err, token) => {
                    if (err) { console.log(err) }
                    const tk = token.split(',')
                  res.json(tk);
                });
                try {
                    const a = instance.save((err) => {
                        if (err) throw err;

                        res.json({
                            status: 201,
                            message: 'Account created!',
                            data: instance
                        });
                    });
                } catch (e) {

                }

            } else {
                res.status(400).send({ message: 'Failed! Email is already in exist!' });

            }
        });





    }
    static getUser(req, res) {
        user.find({}, (err, result) => {
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
    static getoneUser(req, res) {
        user.findOne({ email: req.body.email } && { password: req.body.password }).exec((err, user) => {

            if (user) {
                res.status(400).send({ user });
                return;
            } else {
                res.status(500).send('invalid username or password');
                return;
            }
        });

    }

}
export default usercontroller;