import React from "react";

class Search extends React.Component {

    state = {
        entry:'',
    }

    onInputChange = (event) => {
        this.setState({
            entry: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.formSubmit(this.state.entry);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <div className="ui massive icon input">
                            <input type="text" placeholder="search..." onChange={this.onInputChange} value={this.state.entry} />
                            <div className="ui animated button" onClick={this.onFormSubmit}>
                                <div className="visible content" style={{fontSize:'20px', marginTop:'12%', marginLeft:'5%'}}>Search</div>
                                <div className="hidden content"><i className="search icon"></i></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;