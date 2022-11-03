import UserRows from "./UserRows";

import './Table.css'
import styles from './App.module.css'
const Table = (props) =>{
    
return (
    <table>
    <thead>
        <tr className={styles['table-row']}>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Ip Address</th>
        </tr>
    </thead>
    <tbody>
        {props.tableData.map((user) => (
         <UserRows test={props.test} key={user.id} user={user}/>   
        )
        )}
    </tbody>
</table>
);
}

export default Table;