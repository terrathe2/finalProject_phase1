const express = require('express')
const router = express.Router()
const Model = require('../models')
// const CheckAuth = require('../helper/checkAuth')


router.get('/', (req, res) => {
	// router.use(CheckAuth)

	Model.Matakuliah.findAll({include : [Model.Mahasiswa]},{where : {id : 3}}).then(result =>{
		res.render('pages/index', {role : req.session.role})
	})
})

module.exports = router
