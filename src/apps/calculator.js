//import { useState } from "react";

export function Calculator(props) {
    const [text, setText] = useState('');

    return <>
        <p>{text}</p>
        <input type='text' placeholder="Text" onChange={(event) => {
            setText(event.target.value);
        }}/>
   </>;
};
export function Information(props) {
    let pets = props.user.cat.map((cats, index) => {
        return <tr><td>{index + 1}</td><td>{cats.name}</td><td>{cats.age}</td></tr>
});
    let salaries = props.user.salaries.map((salary, index) => {
      return <tr key={index}><td>{index + 1}</td><td>{salary.salary}</td><td>{salary.from_date}</td></tr>
      });
   
    return (
    <div>
    <p>Данные:</p>
      <p>Имя: {props.user.name}</p>
      <p>Фамилия: {props.user.last_name}</p>
      <p>Возраст: {props.user.age}</p>

      <table>
      <caption>Питомцы:</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {pets}
        </tbody>
      </table>
      <table>
        <caption>Зарплата:</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Salary</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {salaries}
        </tbody>
      </table>
      </div>
    );
};
