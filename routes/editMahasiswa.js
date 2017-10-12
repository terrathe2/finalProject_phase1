const express = require('express')
const router = express.Router()
const Model = require('../models')
const moment = require('moment')
const emailNotif = require('../helper/emailNotif')
const statusHelp = require('../helper/status')
const CheckAuth = require('../helper/checkAuth')

router.get('/', CheckAuth, (req, res) => {
	Model.Mahasiswa.findAll().then(resultMhs =>{
		res.render('pages/editMhs.ejs', {resultMhs : resultMhs, id_dosen : req.session.id_dosen})
	})
})

router.get('/editDataMhs/:id', CheckAuth, (req, res) =>{
	Model.Mahasiswa.findOne({where :{id : req.params.id}}).then( resultDataMhs =>{
		res.render('pages/editDataMhs', {resultMhs : resultDataMhs, id_dosen : req.session.id_dosen} )
	})
})

router.post('/editDataMhs/:id', CheckAuth, (req, res) =>{
	Model.Mahasiswa.update({name : req.body.name, email : req.body.email}, {where : {id : req.params.id}}).then(() =>{
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