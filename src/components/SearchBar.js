import React from 'react';

class SearchBar extends React.Component{
    state = {term: '' };

    //get the special parameter from event handler (event)
    onInputChange = (event) =>{
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) =>{
        event.preventDefault();
        //TODO: make sure we all 
        //callback from parent component
        //Here "onFormSubmit" is a props from parent
        this.props.onFormSubmit(this.state.term)
    };

    render(){
        return (
            <div className = "serach-bar ui segment">
                <form onSubmit={this.onFormSubmit} className = "ui form">
                    <div className = "field">
                        <label>
                            Video Search
                        </label>
                        <input
                            type = "text"
                            onChange={this.onInputChange}
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;