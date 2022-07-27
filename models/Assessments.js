const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const conection = require('../database/database');

const Assessment = conection.define('assessment', {

    name:{
        type: Sequelize.STRING,
        allowNull: false
    },

    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },

    driver:{
        type: Sequelize.STRING,
        allowNull: false
    },

    type_vehicle:{
        type: Sequelize.STRING,
        allowNull: false
    },

    brand_vehicle:{
        type: Sequelize.STRING,
        allowNull: false
    },

    board_vehicle:{
        type: Sequelize.STRING,
        allowNull: false
    },

    year_vehicle:{
        type: Sequelize.STRING,
        allowNull: false
    },

    crlv_vehicle:{
        type: Sequelize.STRING,
        allowNull: false
    },

    cnh:{
        type: Sequelize.STRING,
        allowNull: false
    },

    nfe_charge:{
        type: Sequelize.STRING,
        allowNull: false
    },

    date_inspection:{
        type: Sequelize.STRING,
        allowNull: false
    },

    mileage:{
        type: Sequelize.STRING,
        allowNull: false
    },

    tracker:{
        type: Sequelize.STRING,
        allowNull: false
    },

    seat_belt:{
        type: Sequelize.STRING,
        allowNull: false
    },

    extinguisher:{
        type: Sequelize.STRING,
        allowNull: false
    },

    trunk_curtain:{
        type: Sequelize.STRING,
        allowNull: false
    },

    windshield:{
        type: Sequelize.STRING,
        allowNull: false
    },

    monkey:{
        type: Sequelize.STRING,
        allowNull: false
    },

    triangle:{
        type: Sequelize.STRING,
        allowNull: false
    },

    radiator_water:{
        type: Sequelize.STRING,
        allowNull: false
    },

    direction:{
        type: Sequelize.STRING,
        allowNull: false
    },

    horn:{
        type: Sequelize.STRING,
        allowNull: false
    },

    arrows:{
        type: Sequelize.STRING,
        allowNull: false
    },

    alert_one:{
        type: Sequelize.STRING,
        allowNull: false
    },

    tachograph:{
        type: sequelize.STRING,
        allowNull: false
    },

    tires:{
        type: Sequelize.STRING,
        allowNull: false
    },

    brakes:{
        type: Sequelize.STRING,
        allowNull: false
    },

    windshield_wiper:{
        type: Sequelize.STRING,
        allowNull: false
    },

    rear_view:{
        type: Sequelize.STRING,
        allowNull: false
    },

    lighthouse:{
        type: Sequelize.STRING,
        allowNull: false
    },

    noise_level:{
        type: Sequelize.STRING,
        allowNull: false
    },

    alert_two:{
        type: Sequelize.STRING,
        allowNull: false
    },

    taillight:{
        type: Sequelize.STRING,
        allowNull: false
    },

    brake_oil:{
        type: Sequelize.STRING,
        allowNull: false
    },

    driver_side:{
        type: Sequelize.STRING,
        allowNull: false
    },

    bodywork:{
        type: Sequelize.STRING,
        allowNull: false
    },

    brake_light_two:{
        type: Sequelize.STRING,
        allowNull: false
    },

    motor_oil:{
        type: Sequelize.STRING,
        allowNull: false
    },

    temperature_adjustment:{
        type: Sequelize.STRING,
        allowNull: false
    },

    status:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

    anexos_doc_crvl:{
        type: Sequelize.TEXT,
        allowNull: true
    },

    anexos_doc_nfe:{
        type: Sequelize.TEXT,
        allowNull: true
    }

})

Assessment.sync({force: false});

module.exports = Assessment;