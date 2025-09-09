//const sessionIdToUserMap = new Map(); ab mujhe aaur state maintain nhi karni hai so then i have to use "token"
const jwt = require("jsonwebtoken")
const secret = "jeet@123"

function setUser( user) {
//   sessionIdToUserMap.set(id, user);
     
     return jwt.sign(
        {
            _id:user._id,
            email:user.email
        },
        secret
     );
}

function getUser(token) {
  if(!token) return null;
  try {
    return jwt.verify(token,secret);
  } catch (error) {
    return null;
    }

}

module.exports = {
  setUser,
  getUser,
};