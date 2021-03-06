module.exports = {
  displayname: {type:String,required:true,unique:false,minlength:1},
  username: {type:String,required:true,unique:true,lowercase:true,minlength:1},
  email: {type:String,required:true,unique:true,lowercase:true,minlength:5},
  created: { type: Date, default: Date.now },
  hash: {type:String,required:true},
  admin: {type:Boolean,required:true,default:false},
  banned: {type:Boolean,required:true,default:false},
  adult: {type:Boolean,required:true,default:false},
  approved: {type:Boolean,required:true,default:false}
}
