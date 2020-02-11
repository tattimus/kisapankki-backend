const supertest = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const api = supertest(app)

let token = null

beforeAll(async () => {
  await User.deleteMany({})

  const saltRounds = 10

  password = await bcrypt.hash('testWord', saltRounds)

  const userOne = new User({
    name: 'test1',
    username: 'userOne',
    password: password
  })

  const userTwo = new User({
    name: 'test2',
    username: 'userTwo',
    password: password
  })

  await userOne.save()
  await userTwo.save()
  
  const loggedInUser = await api
  .post('/api/login')
  .send({ username: 'userOne', password: 'testWord' })
  .expect(200)

  token = loggedInUser.body.token
})

describe('Users', () => {
  test('are found', async () => {
    const result = await api
      .get('/api/user')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(result.body[0].username).toBe('userOne')
    expect(result.body[1].username).toBe('userTwo')
  })
})

describe('User', () => {
  test('is added', async () => {
    const result = await api
      .post('/api/user')
      .send({ name: 'test3', username: 'userThree', password: 'testWord' })
      .set('authorization', 'bearer ' + token)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(result.body.username).toBe('userThree')
  })
  
  test('is not added if username already exists', async () => {
    await api
      .post('/api/user')
      .send({ username: 'userTwo' })
      .set('authorization', 'bearer ' + token)
      .expect(400)
  })

  test('is edited', async () => {
    const result = await api
      .put('/api/user')
      .send({ name: 'test3Edited', username: 'userThreeEdited', password: 'newPassword' })
      .set('authorization', 'bearer ' + token)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(result.body.name).toBe('test3Edited')
    expect(result.body.username).toBe('userThreeEdited')
  })

  test('is not edited if username already exists', async () => {
    await api
      .put('/api/user')
      .send({ username: 'userTwo' })
      .set('authorization', 'bearer ' + token)
      .expect(400)
  })
})

afterAll(() => {
  mongoose.connection.close()
})