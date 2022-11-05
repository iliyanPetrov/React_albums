import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

function Home() {
    const { data, isLoading, error } = useQuery(["photo"], async () => {
        const res = await Axios.get(
            "https://jsonplaceholder.typicode.com/albums/1/photos"
        );
        return res.data;
    });

    if (isLoading) return <LoadingSpinner />;
    if (error) return <h1>Error: {error.message}, don't try again..</h1>;

    return (
        <div>
            <h1>Home page Here!!!</h1>
            <div>
                {data
                    ? data.map((photo) => (
                          <div key={photo.id}>
                              <div>{photo.id}</div>
                              <div>{photo.title}</div>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
}

export default Home;
