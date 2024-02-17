import { token } from "../utils/token.js"

const authAuthor = async (req, res, next) => {
  const auhtToken = token

  if (!auhtToken)
    res.send("author not authorized")
  else{
    req.author = auhtToken
    next()
  }
}

export default authAuthor