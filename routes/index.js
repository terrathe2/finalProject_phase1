const express = require('express')
const router = express.Router()
const Model = require('../models')
// const CheckAuth = require('../helper/checkAuth')


router.get('/', (req, res) => {
	// router.use(CheckAuth)

	Model.Matakuliah.findAll({include : [Model.Mahasiswa]},{where : {id : 5}}).then(result =>{
		res.render('pages/index', {id_dosen : req.session.id_dosen})
	})
})

module.exports = router
