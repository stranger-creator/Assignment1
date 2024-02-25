const hasNull = (obj) => {
  for (let key in obj)
    if (obj[key] == null)
      return true

  return false
}

const validate = async (req, res, next) => {
  const body = req.body

  if (hasNull(body))
    res.send("please enter the values")

  next()
}

export default validate