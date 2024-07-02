import { request,loginRequest } from "../utils/request"
import {baseUrl, userInfoPath, loginPath, joinApplicationPath, sendJoinApplicationEmailPath} from "./base"

function login(data:object){
  return loginRequest(baseUrl+loginPath, "POST",data)
}

function modifyUserInfo(data:object){
  return request(baseUrl+userInfoPath,"PUT",data)
}

function getJoinApplication(){
  return request(baseUrl+joinApplicationPath,"GET",undefined)
}

function createJoinApplication(data:object){
  return request(baseUrl+joinApplicationPath,"POST",data)
}

function modifyJoinApplication(data:object){
  return request(baseUrl+joinApplicationPath,"PUT",data)
}
function sendJoinApplicationEmail(){
  return request(baseUrl+sendJoinApplicationEmailPath,"POST",undefined)
}
export {
  login as getLogin,
  modifyUserInfo,
  getJoinApplication,
  createJoinApplication,
  modifyJoinApplication,
  sendJoinApplicationEmail
}
