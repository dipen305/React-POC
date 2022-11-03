import React from 'react'

export default function UserRows(props) {
    props.test();
    return (
        <tr className='table-row'>
            <td>{props.user.first_name}</td>
            <td>{props.user.last_name}</td>
            <td>{props.user.email}</td>
            <td>{props.user.email}</td>
            <td>{props.user.gender}</td>
            <td>{props.user.ip_address}</td>
        </tr>
    )
}
