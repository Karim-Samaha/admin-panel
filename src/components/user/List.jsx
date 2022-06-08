import UsersTable from "./UsersTable";
import '../../scss/list.scss'
const List = ({ type }) => {
    return <>
        <UsersTable type={type} />
    </>
}

export default List;