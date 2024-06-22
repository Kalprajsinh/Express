

function App() {

  function sum(a: number , b: number): number {
    return a + b;
  }
  

  function is18(age: number)
  {
    if(age >= 18)
    {
      return 1
    }
    else
    {
      return 0
    }
  }

  function jssum(a,b){
    return a+b;
  }
  // "noImplicitAny": false,  

  //----------------------------------

  interface User {
    firstName: string;
    lastName: string;
    email?: string;   // optional 
    age: number;
  }
  
  function isLegal(user: User) {
      if (user.age > 18) {
          return true     // 1
      } else {
          return false;   // 0
      }
  }

  function isLegal2(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}

  interface TodoProp{
    title: string,
    description: string,
    done: boolean
  }

    function Todo (props: TodoProp) {
      return(
        <div>
          <h1>
            {props.title}
          </h1>
          <h2>
            {props.description}
          </h2>
       </div>
      ) 
    }
  return (
    <>
      {sum(22,11)}
      <br />
      {is18(20)}
      <br />
      {jssum(2,3)}
      <br />
      {isLegal({firstName: "John", lastName: "Doe", email: "john" , age:19})}
      <br />
      {isLegal2({firstName: "John", lastName: "Doe", email: "john" , age:19})}
      <br />
      <Todo title="Learn React" description="Learn React Hooks" done={false} />
    </>
  )
}

export default App
