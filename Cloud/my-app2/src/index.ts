import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query());

  return c.text('Hello Hono!')
})

app.post('/user' , async (c) => {

  const body = await c.req.json();
  const name = body.name;
  
  const user = {
    name: name,
    age: 30,
    address: {
      street: "Highway 37",
      city: "Springfield",
      state: "OR"
      }
  }
  return c.json(user);
})

export default app
