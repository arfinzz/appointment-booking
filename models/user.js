const Sequelize=require('sequelize');
const db=require('../utils/database');

const User=db.define('user',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    phoneno:{
        type:Sequelize.STRING,
        allowNull:false
    }
}

);

module.exports=User;