import React from 'react';


const data = {
    employee1: {

        id: "1",
        firstname: "Mark",
        lastname: "Otto",
        dob: "04/06/1988",
        email: "abc@xyz.com"

    },

    employee2:
    {
        id: "2",
        firstname: "Jacob",
        lastname: "Thornton",
        dob: "15/04/1989",
        email: "qwe@qaz.com"
    },
    employee3:
    {
        id: "3",
        firstname: "Larry",
        lastname: "Bird",
        dob: "05/10/1990",
        email: "asd@zxc.com"
    },
    employee4:
    {
        id: "4",
        firstname: "Chris",
        lastname: "Mifsud",
        dob: "04/07/1968",
        email: "cab@xyz.com"
    },
    employee5:
    {
        id: "5",
        firstname: "John",
        lastname: "Joannou",
        dob: "10/06/1972",
        email: "ewq@qaz.com"
    },
    employee6:
    {
        id: "6",
        firstname: "Nick",
        lastname: "Dohnt",
        dob: "03/15/1980",
        email: "dsa@zxc.com"
    },

}

function Table() {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Email Address</th>

                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>{data.employee1.id}</td>
                        <td>{data.employee1.firstname}</td>
                        <td>{data.employee1.lastname}</td>
                        <td>{data.employee1.dob}</td>
                        <td>{data.employee1.email}</td>
                    </tr>

                    <tr>
                        <td>{data.employee2.id}</td>
                        <td>{data.employee2.firstname}</td>
                        <td>{data.employee2.lastname}</td>
                        <td>{data.employee2.dob}</td>
                        <td>{data.employee2.email}</td>
                    </tr>

                    <tr>
                        <td>{data.employee3.id}</td>
                        <td>{data.employee3.firstname}</td>
                        <td>{data.employee3.lastname}</td>
                        <td>{data.employee3.dob}</td>
                        <td>{data.employee3.email}</td>
                    </tr>

                    <tr>
                        <td>{data.employee4.id}</td>
                        <td>{data.employee4.firstname}</td>
                        <td>{data.employee4.lastname}</td>
                        <td>{data.employee4.dob}</td>
                        <td>{data.employee4.email}</td>
                    </tr>

                    <tr>
                        <td>{data.employee5.id}</td>
                        <td>{data.employee5.firstname}</td>
                        <td>{data.employee5.lastname}</td>
                        <td>{data.employee5.dob}</td>
                        <td>{data.employee5.email}</td>
                    </tr>

                    <tr>
                        <td>{data.employee6.id}</td>
                        <td>{data.employee6.firstname}</td>
                        <td>{data.employee6.lastname}</td>
                        <td>{data.employee6.dob}</td>
                        <td>{data.employee6.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;