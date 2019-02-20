import React from "react";
import {useFetch} from "../hooks/useFetch";
import "./profile-container.scss"
import Ratings from "./ratings";
import connect from "react-redux/es/connect/connect";

function Photos() {
    const [data, loading] = useFetch(
        "https://jsonplaceholder.typicode.com/photos?albumId=1"
    );
    return (
        <div>
            <h1>Photos</h1>
            {loading ? (
                "Loading..."
            ) : (

                <ul className="grid">
                    {data.map(({ id, title, url }) => (
                        <div className="item" key={`photo-${id}`}>
                            <img alt={title} src={url} />
                            <Ratings max_rating={6}></Ratings>
                        </div>
                    ))}
                </ul>

            )}
        </div>
    );
}

const mapStateToProps = (state) => {
   return { data : state.photos};
};


export default Photos;

connect(mapStateToProps)(Photos);