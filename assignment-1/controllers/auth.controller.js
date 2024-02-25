import { setToken } from "../utils/token.js"

const authorList = {}

const authorRegister = async (req, res) => {
  const { name, emailId, password } = req.body

  if (authorList[emailId])
    res.status(409).send("author with this emailId already registered :)")

  authorList[emailId] = {
    name,
    emailId,
    password
  }

  res.status(200).send("author registered successfully")
}

const authorLogin = async (req, res) => {
  const { emailId, password } = req.body

  if (!authorList[emailId])
    res.status(404).send("user with this emailId not found :)")
  else {
    const author = authorList[emailId]
  
    if (author.password !== password)
      res.status(401).send("invalid password")
    else {
      setToken(emailId)
      res.status(200).send("Login successfully")
    }
  }
}

const getAllAuthers = async (req, res) => {
  res.status(200).json({authors: authorList})
}

export { authorRegister, getAllAuthers, authorLogin }