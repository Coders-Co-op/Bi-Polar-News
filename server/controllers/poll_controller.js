module.exports = {
  poll_res: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let pollData = await db.poll.poll_test_query()
      res.status(200).send(pollData)
    } catch (error) {
      console.log(error)
    }
  },
  poll_submit: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let {art1_id, art2_id, art1_res, art2_res, surprised} = req.body
      let today = new Date()
      let dd = today.getDate()
      let mm = today.getMonth()+1 //January is 0!
      let yyyy = today.getFullYear()
      if(dd<10) {
      dd = '0'+dd
      } 
      if(mm<10) {
      mm = '0'+mm
      } 
      today = mm + '/' + dd + '/' + yyyy    
      let pollPost = await db.poll.poll_insert([art1_id, art2_id, art1_res, art2_res, surprised,today]).catch(err=>console.log(err))
      res.status(201).send(pollPost)      
    } catch (error) {
      console.log(error)
    }
  }
}