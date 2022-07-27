const express = require('express');
const router = express.Router();
const Assessment = require('../models/Assessments');

router.get('/dashbord/assessments/new', (reg,res) =>{
   
    var generalError = reg.flash("generalError");

    generalError = (generalError == undefined || generalError.length == 0) ? undefined : generalError;
    
    res.render('ass-new',{
        generalError: generalError
    });
});

router.get('/dashbord/assessments', (reg,res) =>{
    Assessment.findAll({ 
        order:[['id','DESC']]

    }).then( assessments =>{

        var deleteA = reg.flash("deleteA");
        deleteA = (deleteA == undefined || deleteA.length == 0) ? undefined : deleteA;

        res.render('assessments',{
            assessments: assessments,
            deleteA: deleteA
        });
    })

    // TODO FAZER LAYOUT DE QUANDO NÃO TEM NENHUM DADOS DE AVALIAÇÃO
    // TODO FAZER PAGINAÇÃO DE FICHA DE AVALIAÇÃO 
    
});

router.post('/dashbord/assessments/save', (reg,res) =>{
    
    var {name, cpf, driver, type_vehicle, brand_vehicle, board_vehicle, year_vehicle, crlv_vehicle, cnh,
        nfe_charge, date_inspection, mileage, tracker, seat_belt, extinguisher, trunk_curtain,
        windshield, monkey, triangle, radiator_water, direction, horn, arrows, alert_one, tachograph, 
        tires, brakes, windshield_wiper, rear_view, lighthouse, noise_level, alert_two, taillight,
        brake_oil, driver_side, bodywork, brake_light_two, motor_oil, temperature_adjustment, status,
        anexos_doc_crvl, anexos_doc_nfe} = reg.body;   

    var {nameError, cpfError, driverError, typevError, brandvError, boardvError, yearvError, crlvVError, cnhError,
        nfeError, generalError} = ''; 
    status = 0;
    anexos_doc_crvl = 'sem-anexo';
    anexos_doc_nfe = 'sem-anexo';


        if(name == '' || cpf == '' || driver == '' || type_vehicle == '' || brand_vehicle == '' ||
        board_vehicle == '' || year_vehicle == '' || crlv_vehicle == '' || cnh == '' || nfe_charge == '' || 
        date_inspection == '' || mileage == ''){

            generalError = "Prencha os campos abaixo..";

            reg.flash("generalError", generalError);

            res.redirect("/dashbord/assessments/new");
        }else{

            Assessment.create({

                name: name,
                cpf: cpf,
                driver: driver,
                type_vehicle: type_vehicle,
                brand_vehicle: brand_vehicle,
                board_vehicle:board_vehicle,
                year_vehicle: year_vehicle,
                crlv_vehicle: crlv_vehicle,
                cnh: cnh,
                nfe_charge: nfe_charge,
                date_inspection: date_inspection,
                mileage: mileage,
                tracker: tracker,
                seat_belt: seat_belt,
                extinguisher: extinguisher,
                trunk_curtain: trunk_curtain,
                windshield: windshield,
                monkey: monkey,
                triangle: triangle,
                radiator_water: radiator_water,
                direction: direction,
                horn: horn,
                arrows: arrows,
                alert_one: alert_one,
                tachograph: tachograph,
                tires: tires,
                brakes: brakes,
                windshield_wiper: windshield_wiper,
                rear_view: rear_view,
                lighthouse: lighthouse,
                noise_level: noise_level,
                alert_two: alert_two,
                taillight: taillight,
                brake_oil: brake_oil,
                driver_side: driver_side,
                bodywork: bodywork,
                brake_light_two: brake_light_two,
                motor_oil: motor_oil,
                temperature_adjustment: temperature_adjustment,
                anexos_doc_crvl: anexos_doc_crvl,
                anexos_doc_nfe: anexos_doc_nfe,
                status: status
        
            }).then( assessments =>{

                var cadSuccess = "Avaliação registrada com sucesso"; 
                reg.flash("cadSuccess", cadSuccess);
                res.redirect('/dashbord/assessments/view/'+assessments.id);
        
            }).catch(error =>{
        
                console.log(error);
        
            })

        }   
       
    // TODO AJUSTAR A VALIDAÇÃO DO FORMULARIO 
    // TODO INSIRIR NOVOS CAMPOS NA QUERY DE ANEXOS         
});

router.get('/dashbord/assessments/view/:id', (reg,res) =>{
    var id = reg.params.id;

    if(isNaN(id)){
        res.redirect('/dashbord/assessments/');
    }else{

        var cadSuccess = reg.flash("cadSuccess");
        cadSuccess = (cadSuccess == undefined || cadSuccess.length == 0) ? undefined : cadSuccess;

        Assessment.findOne({
            where:{id,id}
        }).then( assessment =>{

            var date = new Date(assessment.createdAt);
            
            var resultDate = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' as: '+date.getHours()+':'+date.getMinutes();

           
            res.render('ass-view',{
                assessment: assessment, 
                resultDate: resultDate,
                cadSuccess: cadSuccess
            });

        }).catch(error =>{
            console.log(error);
        })
    }

    // TODO FAZER PARTE DE EDIÇÃO DA AVALIAÇÃO
    // TODO  FAZER PARTE DE ANEXOS E UPLOAD DA DOCUMENTAÇÃO
    // TODO FAZER PARTE DE ECLUIR FICHA DE AVALIAÇÃO
    // TODO FAZER PARTE DE IMPIRIMIR FICHA DE AVALIAÇÃO
});

router.get('/dashbord/assessments/delete/:id', (reg,res) =>{
    var id = reg.params.id;

    if(isNaN(id)){
        res.redirect('/dashbord/assessments/');
    }else{
        Assessment.destroy({
            where:{id:id}
        }).then( () =>{

            var deleteA = "Ficha de avaliação excluida com sucess...";
            reg.flash("deleteA",deleteA);

            res.redirect('/dashbord/assessments/');
            console.log('ficha deletada');
        }).catch( (error) =>{
            console.log(error);
        })
    }
    
});

module.exports = router;