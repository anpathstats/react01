// export default Example;
import ModalCreateUser from "./ModalCreateUser"
import "./ManageUser.css"

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage user
            </div>
            <div className="users-content">
                <div>
                    <button>Add new user</button>
                </div>
                <div>
                    Table users
                </div>
                <ModalCreateUser/>
            </div>
        </div>
    )
}

export default ManageUser;