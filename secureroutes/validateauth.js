function validateauth(req,res){
  res.status(200).send('Authenticated');
}
module.exports = ['get','/validateauth',validateauth];
