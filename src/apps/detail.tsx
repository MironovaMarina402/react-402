import React from "react";


interface IUser {
    emp_no: string,
    first_name: string,
    last_name: string,
    birth_date: string,
    gender: string,
    hire_date: string,
}
interface DetailsProps {
    user: IUser
}

class Details extends React.Component<DetailsProps> {
    render() {
        const {user} = this.props;

        return <>
            <ol>
                <li> {user.emp_no}</li>
                <li> {user.first_name}</li>
                <li> {user.last_name} </li>
                <li> {user.birth_date}</li>
                <li> {user.gender}</li>
                <li> {user.hire_date}</li>
            </ol>
        </>;
    }
}

export default Details;