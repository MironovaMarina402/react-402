import './App.css';
import { Calculator } from './apps/calculator';
import { Information } from './apps/calculator';


function hello(user) {
  if (user) {
    return <div>
            <span>{user.name}</span>
            <strong>{user.last_name}</strong>
        </div>;
  }
  return 'undefined';
}

function App() {
const a = 15;
const b = 10;

  let user = {
    
      name: 'John',
      last_name: 'Barlowe',
      age: 30,
  
    cat: [
      {
        name: 'Happy',
        age: 1,
      },
      {
        name: 'Tom',
        age: 4,
      }
    ],
    
    salaries: [
        {
          salary: '5670',
          from_date: '2009'
        },
        {
          salary: '1670',
          from_date: '2018'
        },
        {
          salary: '15670',
          from_date: '2012'
        },
    ],
  };

  
 // const salaries = user.salaries.map((salary, index) => {
 //   return <tr><td>{index + 1}</td><td>{salary.salary}</td><td>{salary.from_date}</td></tr>
 // });

  return (
    <div>
    {/* <p>Данные:</p> */}
      {/* <p>Имя: {user.name}</p> */}
      {/* <p>Фамилия: {user.last_name}</p> */}
      {/* <p>Возраст: {user.age}</p> */}

      {/* <table> */}
      {/* <caption>Питомцы:</caption> */}
        {/* <thead> */}
          {/* <tr> */}
            {/* <th>#</th> */}
            {/* <th>Name</th> */}
            {/* <th>Age</th> */}
          {/* </tr> */}
        {/* </thead> */}
        {/* <tbody> */}
          {/* {pets} */}
        {/* </tbody> */}
      {/* </table> */}
      {/* <table> */}
        {/* <caption>Зарплата:</caption> */}
        {/* <thead> */}
          {/* <tr> */}
            {/* <th>#</th> */}
            {/* <th>Salary</th> */}
            {/* <th>Date</th> */}
          {/* </tr> */}
        {/* </thead> */}
        {/* <tbody> */}
          {/* {salaries} */}
        {/* </tbody> */}
      {/* </table> */}
{/*  */}
       {/* <p>{Calculator()}</p>   */}
       {/* <Calculator user={user} a={'text'} b={b}/>   */}
     {/*  */}
        {/* {<Calculator/> }  */}
        {/* {<Calculator/> }  */}
        {/* {<Calculator/> }  */}
       {/*  */}
       {<Information user={user}/>}
    </div>
  ); 
};


export default App;