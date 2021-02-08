import {RECEIVE_INBOX_DATA} from "../actions/inboxMail.js"

export default (state={},{type,inboxData}) => {
  switch(type){
    case RECEIVE_INBOX_DATA:
      debugger;
      return state;
    default:
      return state;
  }
};