const express = require('express')
const router = express.Router()
const Model = require('../models')
const moment = require('moment')

router.get("/rekap", (req, res) => {
  Model.Matakuliah.findAll().then((rowsMK) => {
    res.render("pages/rekap", {dataMK: rowsMK, dataMKMHS: null});
  })
})

router.post("/rekap/", (req, res) => {
  Model.Matakuliah.find({include:[Model.Mahasiswa], where: {id: req.body.matakuliah}}).then((rowsMKMHS) => {
    Model.Matakuliah.findAll().then((rowsMK) => {
      res.render("pages/rekap", {dataMK: rowsMK, dataMKMHS: rowsMKMHS});
      // res.send(rowsMKMHS)
    })
  })
})

router.get("/rekap/absen/:id/:idMk", (req, res) => {
  Model.MK_Mahasiswa.findAll({order: [["courseDate", "ASC"]], where: {id_mk: req.params.idMk, id_mahasiswa: req.params.id}}).then((rowsMKMHS) => {
    res.render("pages/absen", {dataMKMHS: rowsMKMHS, moment: moment});
    // res.send(rowsMKMHS)
  })
})

module.exports = router
