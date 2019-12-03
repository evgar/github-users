//@flow
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { userActions } from "../../store/actions";
import ListRow from "./../ListRow";
import StyledUsersList from "./StyledUsersList";
import InfiniteScroll from "react-infinite-scroller";

type Props = {
    fetchUsers: () => void,
    fetchNewUsers: () => void,
    users: number
};

const  UsersList = (props: Props) => {
    useEffect(() => {
        const { fetchUsers } = props;
        fetchUsers();
    })

    const loadMore = () => {
        const { fetchNewUsers, users } = props;
        const lastUserId = users[users.length - 1].id;
        fetchNewUsers(lastUserId);
    };

        const { users } = props;
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={loadMore}
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
