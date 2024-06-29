import { request,loginRequest } from "../utils/request"
import {baseUrl,login,joinApplication} from "./base"

function getLogin(data:object){
  return loginRequest(baseUrl+login, "POST",data)
}

function getJoinApplication(){
  return request(baseUrl+joinApplication,"GET",undefined)
}

function createJoinApplication(data:object){
  return request(baseUrl+joinApplication,"POST",data)
}

function modifyJoinApplication(data:object){
  return request(baseUrl+joinApplication,"PUT",data)
}

export {
  getLogin,
  getJoinApplication,
  createJoinApplication,
  modifyJoinApplication
}
