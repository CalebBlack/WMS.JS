import * as actionTypes from './actiontypes';
import * as loginStatuses from './loginstatuses';
const initialState = {loggedIn:false,loginStatus:loginStatuses.uninitialized,headerDisplay:'normal',user:null,lists:{}};

function reducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch(action.type) {
    case actionTypes.setLoginStatus:
      return Object.assign({},state,{loggedIn:action.loginStatus === loginStatuses.loggedIn, loginStatus:action.loginStatus});
    case actionTypes.setList:
      let output = Object.assign({},state,{lists:Object.assign({},state.lists)});
      output.lists[action.name] = action.list;
      return output;
    case actionTypes.setCardDatabase:
      return Object.assign({},state,{cards:action.cards,blackCards:action.cards.blackCards,whiteCards:action.cards.whiteCards});
    case actionTypes.setHeaderDisplay:
      return Object.assign({},state,{headerDisplay:action.display});
    case actionTypes.setUser:
      return Object.assign({},state,{user:action.user});
    default:
      return state;
  }
}
export default reducer;
