import React from "react";
import logo from "./../logo.png"

class DisplayInfor extends React.Component{
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render () {
        const {listUsers} = this.props;
        return(
            <div>
                <img src={logo} className="img"/>
                <div>
                    <span onClick={()=> {this.handleShowHide()}}>
                        {this.state.isShowListUser === true ? "Hide list user":"Show list user"}
                    </span>
                </div>
                {this.state.isShowListUser && 
                    <div>
                        {listUsers.map((user, index) => {
                            return (
                                        <div key={user.id} className={+user.age>18 ? "green":"red"}>
                                            <div> My name is {user.name}. </div>
                                            <div> I am {user.age} years old.</div>
                                            <hr/>
                                            <div>
                                                <button onClick={() => this.props.handleDeleteUser(user.id)}>Xóa</button>
                                            </div>
                                        </div>
                                    )
                        })}
                    </div>
                }
            </div>
        )
    }
    }

export default DisplayInfor;