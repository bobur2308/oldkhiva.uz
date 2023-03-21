const fetch = require('node-fetch')
const token = '5925050931:AAEERjHcMOaNV3bIwQtGnsWBaQyHxWHMNy0';
const maker = 1135938477;
const admin = 917489514;
const admin_2 = 273832648;
const getHomePage = (req,res)=>{
  res.render('home',{
    title:"Home Page"
  })
}
const getAboutPage = (req,res)=>{
  res.render('about',{
    title:"About Page"
  })
}
const getServicesPage = (req,res)=>{
  res.render('services',{
    title:"Services Page"
  })
}
const getRoomsPage = (req,res)=>{
  res.render('rooms',{
    title:"Rooms Page"
  })
}
const getBookingPage = (req,res)=>{
  res.render('booking',{
    title:"Booking Page"
  })
}
const postBookingPage =  (req,res)=>{
  try {
    const inf = {
      name:req.body.name,
      email:req.body.email,
      message:req.body.message,
      checkin:req.body.checkin,
      checkout:req.body.checkout,
      select1:req.body.select1,
      select2:req.body.select2
    }
    res.redirect('/booking')
    console.log(inf);
    ;(async()=>{
      let response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`,
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          chat_id:maker,
          text: JSON.stringify(
            ['Name: ', inf.name, '          Email:', inf.email, '          Message:', inf.message, '          Checkin:' ,inf.checkin, '          Checkout:', inf.checkout, '          Adult:', inf.select1, "          Child:" ,inf.select2]
          )
        })
      })
      response = await response.json()
    })();
  } catch (err) {
    console.log(err);
  }
}

const getTeamPage = (req,res)=>{
  res.render('team',{
    title:"Team Page"
  })
}
const getContactPage = (req,res)=>{
  res.render('contact',{
    title:"Contact Page"
  })
}
const postContactPage = (req,res)=>{
  const inf = {
    name:req.body.name,
    email:req.body.email,
    subject:req.body.subject,
    message:req.body.message
  }
  ;(async()=>{
    let response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`,
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        chat_id:maker,
        text: JSON.stringify(
          ['Name: ', inf.name, '          Email:', inf.email,"         Subject:" , inf.subject, '          Message:', inf.message]
        )
      })
    })
    response = await response.json()
  })();
  res.redirect('/contact')

}

module.exports = {
  getHomePage,
  getAboutPage,
  getServicesPage,
  getRoomsPage,
  getBookingPage,
  postBookingPage,
  getTeamPage,
  getContactPage,
  postContactPage
}