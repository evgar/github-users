import React, { Component } from "react";
import { userActions } from "../../store/actions";
import { connect } from "react-redux";
import StyledAdditionalInfo from "./StyledAdditionalInfo";
import PropTypes from "prop-types";

class AdditionalInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        const { fetchAdditionalInfo, match } = this.props;
        fetchAdditionalInfo(match.params.id);
    }

    componentWillUnmount() {
        const { clearAdditionalInfo } = this.props;
        clearAdditionalInfo();
    }

    render() {
        const {
            name,
            followers,
            following,
            created_at,
            company,
            email,
            location,
            blog,
            bio,
            avatar_url
        } = this.props.user;
        return (
            <StyledAdditionalInfo>
                <img src={avatar_url} alt={name} />
                <p>Name: {name}</p>
                <p>Followers: {followers}</p>
                <p>following: {following}</p>
                <p>Created at: {created_at}</p>
                <p>Company: {company}</p>
                <p>Email: {email}</p>
                <p>Location: {location}</p>
                <p>Blog: {blog}</p>
                <p>Bio: {bio}</p>
            </StyledAdditionalInfo>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = {
    fetchAdditionalInfo: userActions.fetchAdditionalInfo,
    clearAdditionalInfo: userActions.clearAdditionalInfo
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdditionalInfo);

AdditionalInfo.propTypes = {
    clearAdditionalInfo: PropTypes.func.isRequired,
    fetchAdditionalInfo: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};
