module.exports = {
  art_onload: async (req, res) => {
    console.log(req);
    try {
      let db = req.app.get("db");
      let { topics }=req.params
      let result = await db.articles.query_topics(topics);
      res.status(200).send(result);      
    } catch (error) {
      console.log(error);
    }
  },
  art_topics :  async (req, res) => {
    try {
      let db = req.app.get("db");
      let { topics }=req.params
      let result = await db.articles.query_topics(topics)
      res.status(200).send(result);
    } catch (error) {
      console.log(error)
    }
  },
  get_all_topics: async (req, res) => {
    try {
      let db = req.app.get("db");
      let result = await db.topics.get_all_topics();
      res.status(200).send(result);      
    } catch (error) {
      console.log(error)
    }
  },


}