import React from 'react';
import { connect } from 'react-redux';
import { follow, 
         unfollow, 
         //setUsers, 
         setCurrentPage, 
         //setTotalUsersCount, 
         //toggleIsFetching,
         toggleFollowingProgress,
         getUsers
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader.js';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        /* this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            }); */
    }



    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);

        this.props.setCurrentPage(pageNumber); // эту строку я унес из Users.jsx, выделяет номер страницы large font
        /*this.props.toggleIsFetching(true);
        
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            }); */
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                //toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>

    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let withRedirect = withAuthRedirect(UsersContainer);  // вызываем HOC...


export default connect(mapStateToProps,{
    follow,
    unfollow,
    //setUsers,
    setCurrentPage,
    //setTotalUsersCount,
    //toggleIsFetching,
    toggleFollowingProgress,
    getUsers
}) (withRedirect);     // ...и уже эту компоненту отдаём в connect