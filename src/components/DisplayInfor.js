import React from "react";
import logo from "./../logo.png"

// class DisplayInfor extends React.Component{
    // render () {
    //     console.log("Render")
    //     const {listUsers} = this.props;
    //     return(
    //         <div>
    //             {/*img src={logo} className="img"/ */}
    //             {true && 
    //                 <div>
    //                     {listUsers.map((user, index) => {
    //                         return (
    //                                     <div key={user.id} className={+user.age>18 ? "green":"red"}>
    //                                         <div> My name is {user.name}. </div>
    //                                         <div> I am {user.age} years old.</div>
    //                                         <hr/>
    //                                         <div>
    //                                             <button onClick={() => this.props.handleDeleteUser(user.id)}>Xóa</button>
    //                                         </div>
    //                                     </div>
    //                                 )
    //                     })}
    //                 </div>
    //             }
    //         </div>
    //     )
    // }
    // }

const DisplayInfor = (props) => {
        const {listUsers} = props;
        return(
            <div>
                {/*img src={logo} className="img"/ */}
                {true && 
                    <div>
                        {listUsers.map((user, index) => {
                            return (
                                        <div key={user.id} className={+user.age>18 ? "green":"red"}>
                                            <div> My name is {user.name}. </div>
                                            <div> I am {user.age} years old.</div>
                                            <hr/>
                                            <div>
                                                <button onClick={() => props.handleDeleteUser(user.id)}>Xóa</button>
                                            </div>
                                        </div>
                                    )
                        })}
                    </div>
                }
            </div>
        )
}


export default DisplayInfor;