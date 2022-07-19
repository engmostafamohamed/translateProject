var express = require("express");
var Users = require("../models/users.model");
var jwt = require("jsonwebtoken");
exports.signup = (req, res) => {
  console.log(req.body);
  const {
    name,
    email,
    password
  } = req.body;
  // Users.findOne({email}).exec((err, user)={
  //   if(user) {
  //     return res.status(400).json({error: "User already or Email already exists"});
  //   }

  // }) 
  let task = Users.findOne(email, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send(tasks);
    }
  });
};