import request from '../../functions/request';
import safeParse from '../../functions/safeparse';
import {setList} from '../actiontypes';

export default function getList(name,callback=()=>{}){
  return dispatch=>{
    if (typeof name !== 'string' || name.length < 1) {
      callback(new Error('Invalid List Name'));
    } else {
      request('/api/'+name+'/').then(list=>{
        var list = safeParse(list);
        if (list) {
          console.log({type:setList,name,list});
          dispatch({type:setList,name,list});
          callback(null,list);
        } else {
          callback(new Error('Empty List'));
        }
      }).catch(err=>callback(err));
    }
  };
}
