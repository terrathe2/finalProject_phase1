const express = require('express')
const router = express.Router()
const Model = require('../models')
const moment = require('moment')
const emailNotif = require('../helper/emailNotif')
const statusHelp = require('../helper/status')
// const CheckAuth = require('../helper/checkAuth')

router.get('/', (req, res) => {
	// router.use(CheckAuth)
	Model.Dosen.findOne({include : [Model.Matakuliah]},{where : {id_mk : req.session.id_mk}}).then(result =>{
		Model.Schedule.findAll({where : {id_mk : result.id_mk}}).then(result_schedule =>{
			res.render('pages/absenmk', {result_dosen : result, result_schedule : result_schedule, result_mahasiswa: null, id_dosen : req.session.id_dosen, moment : moment, date: null})
			//res.send(result_schedule)
		})


	})
})

router.post('/selectSchedule/:idMk', (req, res) =>{
	let date = new Date(req.body.schedule);
	let datePostgres = moment(date).add(7,'Hours')

  Model.Dosen.findOne({include : [Model.Matakuliah]},{where : {id_mk : req.session.id_mk}}).then(result =>{
		Model.Schedule.findAll({where : {id_mk : result.id_mk}}).then(result_schedule =>{
			Model.MK_Mahasiswa.findAll({include: [Model.Mahasiswa], attributes: ["id", "id_mk", "id_mahasiswa", "status", "courseDate"], where : {id_mk : parseInt(req.params.idMk), courseDate : datePostgres}}).then(resultmahasiswa =>{
				date =
    		res.render('pages/absenmk', {result_dosen : result, result_schedule : result_schedule, id_dosen : req.session.id_dosen, moment : moment, result_mahasiswa : resultmahasiswa, date: date})
  			// res.send(resultmahasiswa)
  			})
		})
	})
})

router.post("/update/:id", (req, res) => {
	let date = new Date(req.body.tanggal);
	let datePostgres = moment(date).add(7, 'hours')
	let batasTelat = req.body.batasTelat;
	let batasAlpha = moment(date).add(120, 'minutes').format("hh:mm A")

	let status = statusHelp(batasTelat, batasAlpha);
	
	Model.MK_Mahasiswa.update({status: status}, {where: {id: req.params.id}}).then(() => {
		Model.MK_Mahasiswa.findAll({where: {id_mahasiswa: parseInt(req.body.id_mahasiswa), id_mk: req.session.id_mk}, order: [["courseDate","ASC"]]}).then((rowsAbsen) => {
			let count = 0;
			let countAlpha = 0;
			rowsAbsen.forEach((row) => {
				if (row.status === "Telat") {
					count++
				} else if (row.status === "Alpha") {
					countAlpha++
				}
			})

			if (count % 3 === 0 && status === "Telat" || count % 3 === 0 && status === "Alpha") {
				emailNotif(status, req.body.email);
			}
		 Model.Dosen.findOne({include : [Model.Matakuliah]},{where : {id_mk : req.session.id_mk}}).then(result =>{
			Model.Schedule.findAll({where : {id_mk : result.id_mk}}).then(result_schedule =>{
				Model.MK_Mahasiswa.findAll({include: [Model.Mahasiswa], attributes: ["id", "id_mk", "id_mahasiswa", "status", "courseDate"], where : {id_mk : req.session.id_mk, courseDate : datePostgres}}).then(resultmahasiswa =>{
	    		res.render('pages/absenmk', {result_dosen : result, result_schedule : result_schedule, id_dosen : req.session.id_dosen, moment : moment, result_mahasiswa : resultmahasiswa, date: date})
					// res.send(rowsAbsen)
				})
			})
		})
		})
	})
})


module.exports = router
