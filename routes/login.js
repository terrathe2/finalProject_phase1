const express = require('express')
const router = express.Router()
const Model = require('../models')
const CheckAuth = require('../helper/checkAuth')
const Enkrip = require('../helper/enkrip')

router.get('/login', (req, res) => {
	res.render('pages/login', {message:''})
})

// router.post('/', (req, res) =>{
// 	Model.User.findOne({where : {username : req.body.username}}).then(result =>{
// 		if(result){
// 			let password = Enkrip(req.body.password, result.secret)
// 			if(password===result.password){
// 				req.session.isLogin = true
// 				req.session.role = result.role
// 				router.use(CheckAuth)
// 				res.redirect('/index')
// 			}else{
// 				res.render('login', {message :'password anda salah'})
// 			}
// 		}else{
// 			res.render('login', {message :'username anda belum terdaftar'})
// 		}
// 	})
// })

router.post('/login', (req, res) =>{
	Model.Dosen.findOne({where :{username : req.body.username}}).then(result =>{
		if(result){
			if(result.password === req.body.password){
				req.session.id_mk = result.id_mk
				req.session.id_dosen = result.id
				router.use(CheckAuth)
				res.redirect('/')
			}else{
				res.render('pages/login', {message: 'password anda salah'})
			}
		}else{
			res.render('pages/login', {message: 'Username anda salah'})
		}
	})
})

// router.get('/signup', (req, res) =>{
// 	res.render('signup')
// })
//
// router.get('/logout', (req, res, next)=>{
// 	req.session.destroy()
// 	res.redirect('/')
// })
//
// router.post('/signup', (req, res) =>{
//
// 	let text =''
//
//     let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//
//     for(let i = 0; i < 8; i++) {
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     let password = Enkrip(req.body.password, text)
//
// 	Model.User.create({
// 		username : req.body.username,
// 		password : password,
// 		role : req.body.role,
// 		createdAt : new Date(),
//     	updatedAt : new Date(),
//     	secret : text
// 	}).then(res.redirect('/'))
// })

module.exports = router
