
export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}


function generateJoinApplicationDataObject(
  data:{
    referrerNumber: string,
    ownNumber: string,
    amount: number,
    surname: string,
    gender:string,
    nickName: string,
    address: string,
  }){
  return {
    referrerNumber: data.referrerNumber,
    ownNumber: data.ownNumber,
    amount: data.amount,
    surname:data.surname,
    gender: data.gender,
    nickName: data.nickName,
    address: data.address,
  }
}

export{
  generateJoinApplicationDataObject
}
