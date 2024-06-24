import { request } from "../utils/request"
import {baseUrl,login} from "./base"

function getLogin(data:object){
  return request(baseUrl+login, "POST",data)
}

module.exports={
  getLogin
}
