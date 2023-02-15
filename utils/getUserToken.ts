const getUserToken = (): string => {

  return `${localStorage.getItem("token")}`;

}

export default getUserToken
