import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../../store/actions";
import PropTypes from "prop-types";
import ListRow from "./../ListRow";
import StyledUsersList from "./StyledUsersList";
import InfiniteScroll from "react-infinite-scroller";

class UsersList extends Component {
    componentDidMount() {
        const { fetchUsers } = this.props;
        fetchUsers();
    }

    loadMore = () => {
        const { fetchNewUsers, users } = this.props;
        const lastUserId = users[users.length - 1].id;
        fetchNewUsers(lastUserId);
    };

    render() {
        const { users } = this.props;
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadMore}
                loader={<div>Loading ...</div>}
                initialLoad={false}
                hasMore
            >
                <StyledUsersList>
                    {users.map((user, i) => (
                        <ListRow data={user} key={i} />
                    ))}
                </StyledUsersList>
            </InfiniteScroll>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users
});

const mapDispatchToProps = {
    fetchUsers: userActions.fetchUsers,
    fetchNewUsers: userActions.fetchNewUsers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersList);

UsersList.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    fetchNewUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};
