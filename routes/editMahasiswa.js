const express = require('express')
const router = express.Router()
const Model = require('../models')
const moment = require('moment')
const CheckAuth = require('../helper/checkAuth')

router.get('/', CheckAuth, (req, res) => {
	Model.Mahasiswa.findAll().then(resultMhs =>{
		Model.MK_Mahasiswa.findAll({where: {id_mk: req.session.id_mk}}).then((rowMKMHS) => {
			res.render('pages/editMhs.ejs', {resultMhs : resultMhs, dataMKMHS: rowMKMHS, id_dosen : req.session.id_dosen})
		})
	})
})

router.get('/assignMhs/:idMhs', CheckAuth, (req, res) => {
	Model.Schedule.findAll({where: {id_mk: req.session.id_mk}}).then((arrSchedule) => {
		let arrMKMHS = []
		arrSchedule.forEach((rowMKMHS) => {
			arrMKMHS.push({
				id_mk: req.session.id_mk,
				id_mahasiswa: req.params.idMhs,
				status: null,
				courseDate: moment(rowMKMHS.tanggal).add(7, "hours").format("YYYY-MM-D hh:mm A")
			})
		})

		// res.send(arrMKMHS)
		Model.MK_Mahasiswa.bulkCreate(arrMKMHS).then(() => {
			res.redirect('/editMhs')
		})
	})
})

router.get('/editDataMhs/:id', CheckAuth, (req, res) =>{
	Model.Mahasiswa.findOne({where :{id : req.params.id}}).then( resultDataMhs =>{
		res.render('pages/editDataMhs', {resultMhs : resultDataMhs, id_dosen : req.session.id_dosen} )
	})
})

router.post('/editDataMhs/:id', CheckAuth, (req, res) =>{
	Model.Mahasiswa.update({id: req.params.id, name : req.body.name, email : req.body.email}, {where : {id : req.params.id}}).then(() =>{
		res.redirect('/editMhs')
	})
})

router.get('/deleteDataMhs/:id', CheckAuth, (req, res) =>{
	Model.Mahasiswa.destroy({where : {id : req.params.id}}).then(() =>{
		res.redirect('/editMhs')
	})
})

router.post('/addDataMhs', CheckAuth, (req, res) =>{
	Model.Mahasiswa.create({
		name : req.body.name,
		email : req.body.email,
		createdAt : new Date(),
      	updatedAt : new Date()
		}).then(() =>{
			res.redirect('/editMhs')
		})
})

module.exports = router
