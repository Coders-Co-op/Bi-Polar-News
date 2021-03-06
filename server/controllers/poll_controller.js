module.exports = {
  poll_res: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let {art1_id, art2_id} = req.query;
      let art1ReasonableCount = await db.poll.poll_get_res([Number(art1_id), Number(art2_id), 1])
      let art2ReasonableCount = await db.poll.poll_get_res([Number(art1_id), Number(art2_id), 0])
      let overallSurprisedCount = await db.poll.poll_get_surprised([Number(art1_id), Number(art2_id)])
      let counts = {
        art1Count : Number(art1ReasonableCount[0].count),
        art2Count : Number(art2ReasonableCount[0].count),
        surprisedCount: Number(overallSurprisedCount[0].count)
      }
      res.status(200).send(counts)
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
      console.log(req.body);
      let pollPost = await db.poll.poll_insert([art1_id, art2_id, art1_res, art2_res, surprised,today]).catch(err=>console.log(err))
      res.status(201).send(pollPost)      
    } catch (error) {
      console.log(error)
    }
  }
}