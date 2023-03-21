const express = require('express');
const router = express.Router();
const {
  getHomePage, 
  getAboutPage, 
  getServicesPage, 
  getRoomsPage, 
  getBookingPage, 
  getTeamPage, 
  getContactPage, 
  postBookingPage, 
  postContactPage
}  = require('../Controllers/Controller')

router.get('/',getHomePage)
router.get('/about',getAboutPage)
router.get('/services',getServicesPage)
router.get('/rooms',getRoomsPage)
router.get('/booking',getBookingPage)
router.post('/booking',postBookingPage)
router.get('/team',getTeamPage)
router.get('/contact',getContactPage)
router.post('/contact',postContactPage)



module.exports = router