module.exports=function checkAuth (req, res, next) {
	console.log('---- chek auth', req.session)
	if (!req.session.id_dosen) {
		res.redirect('/')
		return;
	}
	next();
}
