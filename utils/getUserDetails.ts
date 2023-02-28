const getUserDetails = (): string => {

    return  JSON.parse(`${localStorage.getItem("user")}`);
  
  }
  
  export default getUserDetails
  