import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input value={this.state.term} onChange={e => this.setState({ term: e.target.value })} type="text" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;