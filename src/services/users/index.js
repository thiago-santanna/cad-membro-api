
const getUserService = async (req, res, next) => {
  try {
    const sqlResult = {
      id: 1020,
      name: "Jonh Doe"
    }
    return res.json(sqlResult)
  } catch (error) {
    console.log(error)
    return error
  }
}

export { getUserService }
