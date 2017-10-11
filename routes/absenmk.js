const express = require('express')
const router = express.Router()
const Model = require('../models')
const moment = require('moment')
// const CheckAuth = require('../helper/checkAuth')


router.get('/absenmk', (req, res) => {
	// router.use(CheckAuth)

	Model.Dosen.findOne({include : [Model.Matakuliah]},{where : {id_mk : req.session.id_mk}}).then(result =>{
		Model.Schedule.findAll({where : {id_mk : result.id_mk}}).then(result_schedule =>{
			res.render('pages/absenmk', {result_dosen : result, result_schedule : result_schedule, id_dosen : req.session.id_dosen, moment : moment})
			//res.send(result_schedule)
		})
		
		
	})
})

router.post('/selectSchedule/:idMk', (req, res) =>{

let date = new Date(req.body.schedule);
date = moment(date).add(7,'Hours')
  

  Model.Dosen.findOne({include : [Model.Matakuliah]},{where : {id_mk : req.session.id_mk}}).then(result =>{
		Model.Schedule.findAll({where : {id_mk : result.id_mk}}).then(result_schedule =>{
			Model.MK_Mahasiswa.findAll({where : {id_mk : parseInt(req.params.idMk), courseDate : date}}).then(resultmahasiswa =>{
    			//res.render('pages/absenmk', {result_dosen : result, result_schedule : result_schedule, id_dosen : req.session.id_dosen, moment : moment, mahasiswa : resultmahasiswa})
  				//res.send(resultmahasiswa)
  			})
			//res.send(result_schedule)
		})
	})

  
})

module.exports = router
