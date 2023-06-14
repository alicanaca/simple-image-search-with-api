import React from "react";
import axios from "axios";
import Search from "./Search";
import ImageList from "./ImageList";

class App extends React.Component {

    state = {
        images: []
    }

    onFormSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=37136521-20ede562971345726af58abea&q=${entry}&image_type=photo&per_page=6`)
        this.setState({images: response.data.hits})
    }

    render() {
        return(
            <div className="ui container" style={{marginTop:'30px'}}>
                <Search formSubmit={this.onFormSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;