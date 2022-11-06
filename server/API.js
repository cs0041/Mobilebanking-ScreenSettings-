/* eslint-disable prettier/prettier */
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const User = require('../models/User');
const { ObjectId} = require('mongodb');

//find user 
// send ID get DATA
router.post('/data', async(req, res) => {
    try {
           let {id} =
             req.body;
          const dataUser = await User.findById(id);
          if (dataUser.length <=0){
             throw new Error("Account doesn't exit ");
          }else
              res.json({
                status: 'successful',
                data: dataUser,
              });
    } catch (error) {
       res.json({
         status: 'FAILED',
       });
    }
});

//create
router.post('/makedata', (req, res) => {
    try {
         let {
                account,
                contactus,
                email,
                pin,
                limitperday, 
                address,
                phone, } = req.body;
          const newUser = new User({
            account,
            contactus,
            email,
            pin,
            limitperday,
            address,
            phone,
          });
          newUser.save().then(
            res.json({
              status: 'successful',
              data: {
                account,
                contactus,
                email,
                pin,
                limitperday,
                address,
                phone,
              }
            }),
          );
    } catch (error) {
      res.json({
        status: 'FAILED',
      });
    }
});

//update
router.post('/updatedata',async (req, res) => {
  try {
     let {id,email,pin, limitperday, address, phone} = req.body;
     console.log(id)
      const dataUser = await User.findById(id);
      if (dataUser.length <=0) throw new Error("Account doesn't exit ");
      let dataTemp = {}
      if (email != undefined &&email !='')dataTemp.email = email;
      if (pin != undefined && pin != '') dataTemp.pin = pin;
      if (limitperday != undefined&&limitperday !='') dataTemp.limitperday = limitperday;
      if (address != undefined && address != '') dataTemp.address = address;
      if (phone != undefined && phone != '') dataTemp.phone = phone;
       
    console.log(dataTemp);
    // const newUser = new User(dataTemp);
    const update= await User.findByIdAndUpdate(id, dataTemp)
    res.json({
      status: 'successful',
      data: {
        dataTemp,
      },
    });
  } catch (error) {
    res.json({
      status: 'FAILED',
      message: error.message,
    });
  }
});

//find all
router.get('/getdata', (req, res) => {
    try {
          User.find().then(result => {
              res.json({
                status: 'successful',
                data: result,
              });
          });
    } catch (error) {
      res.json({
        status: 'FAILED',
      });
    }
  
});


module.exports = router;

