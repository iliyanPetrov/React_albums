import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { useParams } from "react-router-dom";

function TestAlbum() {
    const { data, isLoading, error } = useQuery(["photo"], async () => {
        const res = await Axios.get(
            `https://jsonplaceholder.typicode.com/albums/${params.id}/photos`
        );
        return res.data;
    });

    const params = useParams();

    if (isLoading) return <LoadingSpinner />;
    if (error) return <h1>Error: {error.message}, pls don't try again..</h1>;
    // console.log(params);
    return (
        <aside>
            {/* <h1> Album aside generic results</h1> */}
            {data
                ? data.map((photo) => (
                      <div key={photo.id} className="gtc2">
                          <div className="title_level">
                              <span>{photo.id}</span>
                              <span>{photo.title}</span>
                          </div>
                          <div>
                              <img src={photo.url} alt="color canva" />
                          </div>
                      </div>
                  ))
                : null}
        </aside>
    );
}

export default TestAlbum;
