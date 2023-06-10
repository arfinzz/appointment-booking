const db=require('../utils/database');
const User=require('../models/user');


exports.getAppointments=(req,res,next)=>{
    User.findAll()
    .then(appointments=>{
        res.json(appointments);
    })
    .catch(err=>{
        console.log(err);
    });
}

exports.getAppointmentById=(req,res,next)=>{
    const id=req.params.id;
    User.findAll({
        where:{
            id:id
        }
    })
    .then(appointment=>{
        //console.log(appointment[0])
        res.json(appointment[0]);
    })
    .catch(err=>{
        console.log(err);
    });


}


exports.deleteAppointmentById=(req,res,next)=>{
    const id=req.params.id;
    User.destroy({
        where:{
            id:id
        }
    })
    .then(appointment=>{
        //console.log(appointment[0])
        res.json({status:"success"});
    })
    .catch(err=>{
        console.log(err);
    });


}

exports.addAppointment=(req,res,next)=>{
    console.log('this is insisahub');
    console.log(req.body);
    User.create({
        username:req.body.username,
        email:req.body.email,
        phoneno:req.body.phoneno
    })
    .then(()=>{
        res.json({status:"success"});
    })
    .catch(err=>{
        console.log(err);
    })
}