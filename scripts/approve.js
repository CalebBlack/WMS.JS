const {User} = require('../models');

let username = process.argv[2];
console.log('Inputted Username:',username);
User.findOne({username}).then(user=>{
  if (!user) {
    return (console.log('User not found'));
  }
  user.approved = true;
  user.save().then(()=>{
    console.log('user approved');
  }).catch(err=>{
    console.log('err',err);
  })
}).catch(err=>{
  console.log('err',err);
});
