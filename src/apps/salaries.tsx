import React from "react";
interface SalariesProps {
  user: {
name: string,
age: number,
    salaries: [
      salary: number,
      from_date: number,
    ]
  },

}

class Salaries extends React.Component {
   
    render () {

        return <table>
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
       {/* <tfoot>
          <tr>
            <td>#</td>
            <td>Salary</td>
            <td>Date</td>
          </tr>
        </tfoot> */}
      </table>; 
    }
}
export default Salaries
