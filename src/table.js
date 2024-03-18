export function TableData({recordsdata,deletedata}) {
    return (
        <table>
            <thead>
                <th>Fname</th>
                <th>Lname</th>
                <th>cricket</th>
                <th>hockey</th>
            </thead>
            <tbody>{
                recordsdata?.map((item, index) => {
                    return (
                        <tr>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.cricket}</td>
                            <td>{item.hockey}</td>
                            <td><button onClick={() => deletedata(
                                
                            )}>delete</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}