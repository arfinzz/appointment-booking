const express=require('express');
const userController=require('../controllers/user');

const router=express.Router();

router.get('/',userController.getAppointments);


router.post('/addAppointment',userController.addAppointment);

router.get('/delete/:id',userController.deleteAppointmentById);

router.get('/:id',userController.getAppointmentById);


module.exports=router;