import React, {useState} from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";


// class MyComponent extends React.Component{

//     state = {
//         listUsers: [
//             {id: 1, name:"An", age:"16"},
//             {id: 2, name:"Bình", age:"31"},
//             {id: 3, name:"Cường", age:"69"}    
//     ]
//     }

//     handleAddNewUser = (userObj) => {
//         // Cách 2: Không nên
//         // let listUsersNew = this.state.listUsers;
//         // listUsersNew.unshift(userObj);
//         // this.setState({
//         //     listUsers: listUsersNew
//         // })
//         //Cách 1: Nên
//         // this.setState({
//         //     listUsers: [userObj,...this.state.listUsers]
//         // })
//         this.setState({
//             listUsers: [...this.state.listUsers,userObj]
//         })
//     };

//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         })

//     }

//     //JSX
//     render() {

//         return(
//             <div>
//                 <br></br>
//                 <AddUserInfor
//                     handleAddNewUser = {this.handleAddNewUser}                
//                 />
//                 <br></br>
//                 <DisplayInfor 
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser = {this.handleDeleteUser}
//                 />
//                 <hr/>
//             </div>
//         )
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setListUsers]  = useState(
        [
            {id: 1, name:"An", age:"16"},
            {id: 2, name:"Bình", age:"31"},
            {id: 3, name:"Cường", age:"69"}  
        ]
    )

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj,...listUsers])
    };

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUsers(listUsersClone);
    }


    return (
        <div>
            <br></br>
            <AddUserInfor
                handleAddNewUser = {handleAddNewUser}                
            />
            <br></br>
            <DisplayInfor 
                listUsers={listUsers}
                handleDeleteUser = {handleDeleteUser}
            />
            <hr/>
        </div>
    )
}

export default MyComponent;