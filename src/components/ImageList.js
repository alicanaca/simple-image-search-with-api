import React from "react";

const ImageList = (props) => {
    const imgs = props.images.map((image) => {
        return(
            <div className="card" key={image.id}>
                <div className="image">
                    <img src={image.webformatURL} alt="image"></img>
                </div>
            </div>
        )
    })
    return (
        <div className="ui cards">
            {imgs}
        </div>
    )
}

export default ImageList;