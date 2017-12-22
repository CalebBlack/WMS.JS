const {Session} = require('../models');
function authenticateSession(req){
  return new Promise((resolve,reject)=>{
    let session = req.headers && req.headers.session && typeof req.headers.session =='string' && req.headers.session.length > 0 ? req.headers.session : req.cookies && req.cookies.session && typeof req.cookies.session == 'string' && req.cookies.session.length > 0 ? req.cookies.session : null;
    if (session) {
      Session.findOne({_id:session},(err,session)=>{
        if (err) return reject(err);
        if (!session) return reject('Session not found');
        resolve(session);
      });
    } else {
      reject('Unauthorized');
    }
  });
}
module.exports = authenticateSession;
