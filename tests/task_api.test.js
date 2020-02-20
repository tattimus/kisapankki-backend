const supertest = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')
const Task = require('../models/task')
const Category = require('../models/category')
const Series = require('../models/series')
const Language = require('../models/language')
const Rule = require('../models/rule')
const User = require('../models/user')
const api = supertest(app)

describe('Tasks', () => {

  var token = null

  beforeAll(async () => {
    const newAdmin = {
      name: 'testAdminN',
      username: 'testAdminUN',
      password: 'testAdminPW',
      adminKey: process.env.ADMIN_KEY
    }
    await api
      .post('/api/user/adminkey')
      .send(newAdmin)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const loggedInAdmin = await api
      .post('/api/login')
      .send(newAdmin)
      .expect(200)
    token = loggedInAdmin.body.token
  })

  beforeEach(async () => {
    await Task.deleteMany({})
    await Category.deleteMany({})
    await Series.deleteMany({})
    await Language.deleteMany({})
    await Rule.deleteMany({})

  })

  test('can be added without pointers to language, age grp, category or rules', async () => {
    const newTask = new Task({
      name: 'test-task',
      assignmentText: 'test that the model works',
      supervisorInstructions: 'check that the tests pass',
      gradingScale: '5 or 0',
      creatorName: 'Test Steve',
      creatorEmail: 'Test.Steve@testing.test',
      pending: false
    })
    await newTask.save()
    const result = await api
      .get('/api/task')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(result.body[0].name).toBe('test-task')
    expect(result.body[0].pending).toBe(false)
  })

  test('can be linked to language, age grp, category and rules', async () => {
    const cat = new Category({
      name: 'testC'
    })
    const rules = new Rule({
      name: 'testR'
    })
    const lang = new Language({
      name: 'testL'
    })
    const series = new Series({
      name: 'testS',
      maxAge: 2,
      minAge: 1,
      color: 'testC'
    })

    const savedC = await cat.save()
    const savedR = await rules.save()
    const savedL = await lang.save()
    const savedS = await series.save()

    const newTask = new Task({
      name: 'test',
      assignmentText: 'test the linking/populating of pointers',
      supervisorInstructions: 'check that the tests pass',
      gradingScale: '5 or 0',
      creatorName: 'Test Steve',
      creatorEmail: 'Test.Steve@testing.test',
      pending: false,
      series: [savedS.id],
      category: savedC.id,
      language: savedL.id,
      rules: savedR.id
    })

    await newTask.save()
    const result = await api
      .get('/api/task')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(result.body[0].name).toBe('test')
    expect(result.body[0].series[0].name).toBe('testS')
    expect(result.body[0].category.name).toBe('testC')
  })

  test('can be added through taskRouter', async () => {
    const cat = new Category({
      name: 'testC'
    })
    const rules = new Rule({
      name: 'testR'
    })
    const lang = new Language({
      name: 'testL'
    })
    const series = new Series({
      name: 'testS',
      maxAge: 2,
      minAge: 1,
      color: 'testColor'
    })
    const savedC = await cat.save()
    const savedR = await rules.save()
    const savedL = await lang.save()
    const savedS = await series.save()

    newTask = {
      name: 'router test',
      assignmentText: 'test the adding through posting',
      supervisorInstructions: 'check that the tests pass',
      gradingScale: '5 or 0',
      creatorName: 'Test Steve',
      creatorEmail: 'Test.Steve@testing.test',
      series: [savedS.id],
      category: savedC.id,
      language: savedL.id,
      rule: savedR.id
    }

    await api
      .post('/api/task')
      .send(newTask)
      .set('authorization', 'bearer ' + token)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const result = await api
      .get('/api/task')
      .set('authorization', 'bearer ' + token)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(result.body[0].name).toBe('router test')
    expect(result.body[0].series[0].color).toBe('testColor')
  })

  test('can be deleted', async () => {
    const newTask = new Task({
      name: 'deleted test',
      assignmentText: 'test the deletion of tasks',
      supervisorInstructions: 'check that the tests pass',
      gradingScale: '5 or 0',
      creatorName: 'Test Steve',
      creatorEmail: 'Test.Steve@testing.test',
      pending: true,
      series: null,
      rules: null,
      category: null,
      language: null
    })
    const savedTask = await newTask.save()

    const res1 = await api
      .get('/api/task/pending')
      .set('authorization', 'bearer ' + token)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(res1.body[0].name).toBe('deleted test')
    expect(res1.body.length).toBe(1)

    await api
      .delete(`/api/task/${savedTask.id}`)
      .set('authorization', 'bearer ' + token)
      .expect(204)

    const res2 = await api
      .get('/api/task/pending')
      .set('authorization', 'bearer ' + token)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(res2.body.length).toBe(0)
  })

  test('can be fetched with id', async () => {
    const firstTask = new Task({
      name: 'first task',
      assignmentText: 'test the single search of tasks',
      supervisorInstructions: 'check that the tests pass',
      gradingScale: '5 or 0',
      creatorName: 'Test Steve',
      creatorEmail: 'Test.Steve@testing.test',
      pending: false,
      series: null,
      rules: null,
      category: null,
      language: null
    })
    const secondTask = new Task({
      name: 'second task',
      assignmentText: 'test the single search of tasks',
      supervisorInstructions: 'check that the tests pass',
      gradingScale: '5 or 0',
      creatorName: 'Test Steve',
      creatorEmail: 'Test.Steve@testing.test',
      pending: false,
      series: null,
      rules: null,
      category: null,
      language: null
    })
    const first = await firstTask.save()
    const second = await secondTask.save()

    const allTasks = await api
      .get('/api/task')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(allTasks.body.length).toBe(2)
    const singleTask = await api
      .get(`/api/task/${second.id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(singleTask.body.name).toBe('second task')
  })

  test('can be searched by pending status', async () => {
    const firstTask = new Task({
      name: 'first task',
      assignmentText: 'test the task fetching with pending',
      supervisorInstructions: 'check that the tests pass',
      gradingScale: '5 or 0',
      creatorName: 'Test Steve',
      creatorEmail: 'Test.Steve@testing.test',
      pending: false
    })
    const secondTask = new Task({
      name: 'second task',
      assignmentText: 'test the task fetching with pending',
      supervisorInstructions: 'check that the tests pass',
      gradingScale: '5 or 0',
      creatorName: 'Test Steve',
      creatorEmail: 'Test.Steve@testing.test',
      pending: true
    })
    const thirdTask = new Task({
      name: 'third task',
      assignmentText: 'test the task fetching with pending',
      supervisorInstructions: 'check that the tests pass',
      gradingScale: '5 or 0',
      creatorName: 'Test Steve',
      creatorEmail: 'Test.Steve@testing.test',
      pending: false
    })
    await firstTask.save()
    await secondTask.save()
    await thirdTask.save()
    const acceptedTasks = await api
      .get('/api/task')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(acceptedTasks.body.length).toBe(2)
    const pendingTasks = await api
      .get('/api/task/pending')
      .set('authorization', 'bearer ' + token)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(pendingTasks.body.length).toBe(1)
    expect(pendingTasks.body[0].name).toBe('second task')
  })

  test('can be modified', async () => {
    const cat = new Category({
      name: 'cat1'
    })
    const cat2 = new Category({
      name: 'cat2'
    })
    const rules = new Rule({
      name: 'rule1'
    })
    const lang = new Language({
      name: 'lang1'
    })
    const series = new Series({
      name: 'ser1',
      maxAge: 2,
      minAge: 1,
      color: 'color1'
    })
    const savedC = await cat.save()
    const savedC2 = await cat2.save()
    const savedR = await rules.save()
    const savedL = await lang.save()
    const savedS = await series.save()

    const newTask = new Task({
      name: 'modifying test',
      assignmentText: 'test the modification of task',
      supervisorInstructions: 'check that the tests pass',
      gradingScale: '5 or 0',
      creatorName: 'Test Steve',
      creatorEmail: 'Test.Steve@testing.test',
      series: savedS.id,
      category: savedC.id,
      language: savedL.id,
      rules: savedR.id,
      pending: false
    })

    let modiTask = await newTask.save()
    modiTask.name = 'modified task name'
    modiTask.category = savedC2.id

    await api
      .put(`/api/task/${modiTask.id}`)
      .send(modiTask)
      .set('authorization', 'bearer ' + token)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const updTask = await api
      .get(`/api/task/${modiTask.id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(updTask.body.name).toBe('modified task name')
    expect(updTask.body.category.name).toBe('cat2')
  })

  test('pending status can be changed from pending to accepted', async () => {
    const task = new Task({
      name: 'pending to accepted test',
      assignmentText: 'test the accepting of task',
      supervisorInstructions: 'check that the tests pass',
      gradingScale: '5 or 0',
      creatorName: 'Test Steve',
      creatorEmail: 'Test.Steve@testing.test',
      pending: true
    })
    const pendingTask = await task.save()
    const emptyAcceptedList = await api
      .get('/api/task')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(emptyAcceptedList.body.length).toBe(0)

    await api
      .put(`/api/task/${pendingTask.id}/accept`)
      .set('authorization', 'bearer ' + token)
      .expect(200)

    const acceptedList = await api
      .get('/api/task')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(acceptedList.body.length).toBe(1)
    expect(acceptedList.body[0].name).toBe('pending to accepted test')
  })

})

afterAll(async () => {
  await User.deleteMany({})
  mongoose.connection.close()
})

