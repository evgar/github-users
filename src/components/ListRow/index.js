import React from "react";
import { StyledListRow, StyledLink, StyledImage } from "./StyledListRow";
import PropTypes from "prop-types";

const ListRow = ({ data }) => {
    const { login, html_url, avatar_url } = data;
    return (
        <StyledListRow>
            <StyledLink to={`/${login}`}>
                <p>Login: {login}</p>
                <p>Profile: {html_url}</p>
                <StyledImage src={avatar_url} alt={`${login} avatar`} />
            </StyledLink>
        </StyledListRow>
    );
};

export default ListRow;

ListRow.propTypes = {
    data: PropTypes.object.isRequired
};
