const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const User = require('../models/user')


userRouter.get('/', async (req,res,next)=>{
  try{
    const users = await User.find({})
    res.json(users.map((user)=> user.toJSON()))
  }catch(exception){
    next(exception)
  }
})

userRouter.post('/', async (req, res, next) => {

  const body = req.body

  const saltRounds = 10
  const password = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    password,
  })

  try {
    const savedUser = await user.save()
    res.json(savedUser.toJSON())
  } catch (exception) {
    next(exception)
  }
})

module.exports = userRouter