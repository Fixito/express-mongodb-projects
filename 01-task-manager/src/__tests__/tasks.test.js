import request from 'supertest';
import app from '../app.js';
import Task from '../features/tasks/tasks.model.js';

beforeEach(async () => {
  await Task.deleteMany();
});

describe('Tasks API', () => {
  it('should create a new task', async () => {
    const res = await request(app)
      .post('/api/v1/tasks')
      .send({ name: 'Test Task', completed: false });

    expect(res.status).toBe(201);
    expect(res.body.task).toHaveProperty('_id');
    expect(res.body.task.name).toBe('Test Task');

    const task = await Task.findOne({ name: 'Test Task' });

    expect(task).not.toBeNull();
    expect(task.name).toBe('Test Task');
  });

  it('should get all tasks', async () => {
    const task = new Task({
      name: 'Another Test Task',
    });
    await task.save();

    const res = await request(app).get('/api/v1/tasks');

    expect(res.status).toBe(200);
    expect(res.body.tasks).toHaveLength(1);
    expect(res.body.tasks[0]).toHaveProperty('name', 'Another Test Task');
  });

  it('should delete a task', async () => {
    const task = new Task({
      name: 'Task to delete',
    });
    await task.save();

    const res = await request(app).delete(`/api/v1/tasks/${task._id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Tâche supprimée');
  });

  it('should update an existing task', async () => {
    const task = new Task({
      name: 'Task to update',
    });
    await task.save();

    const res = await request(app)
      .put(`/api/v1/tasks/${task._id}`)
      .send({ name: 'Updated Task', completed: true });

    expect(res.status).toBe(200);
    expect(res.body.task.name).toBe('Updated Task');
    expect(res.body.task.completed).toBeTruthy();
  });

  it('should return 404 when task is not found', async () => {
    const taskId = '674475cef351d9f2d71b4367';

    const res = await request(app).get(`/api/v1/tasks/${taskId}`);

    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty(
      'msg',
      `Aucune tâche trouvée avec l'id ${taskId}`
    );
  });

  it('should return 404 when trying to delete a non-existent task', async () => {
    const taskId = '674475cef351d9f2d71b4367';

    const res = await request(app).delete(`/api/v1/tasks/${taskId}`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty(
      'msg',
      `Aucune tâche trouvée avec l'id ${taskId}`
    );
  });

  it('should return 400 if name is missing', async () => {
    const res = await request(app).post('/api/v1/tasks').send({});
    expect(res.status).toEqual(400);
  });
});
