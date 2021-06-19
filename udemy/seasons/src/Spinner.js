import React from 'react';

const Spinner = (props) => {
    return (
        <div class="ui active dimmer">
            <div class="ui loader big text">{props.message}</div>
        </div>
    );
};

Spinner.defaultProps = {
    message: "Loading..."
};

export default Spinner;