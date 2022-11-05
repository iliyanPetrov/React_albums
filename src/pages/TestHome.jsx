import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router-dom";

function TestHome() {
    const { data, isLoading, error } = useQuery(["photo"], async () => {
        const res = await Axios.get(
            "https://jsonplaceholder.typicode.com/albums"
        );
        return res.data;
    });

    // const handleChoice = () => {
    //     navigate(`/${item.id}`);
    // };

    let navigate = useNavigate();
    if (isLoading) return <LoadingSpinner />;
    if (error) return <h1>Error: {error.message}, don't try again..</h1>;

    return (
        <article>
            <h1> Article generic data</h1>
            {data.map((item) => {
                return (
                    <div
                        onClick={() => {
                            return navigate(`/album/${item.id}`);
                        }}
                        className="gtc"
                        key={item.id}
                    >
                        <div>Album No.{item.id}</div>
                        <div>{item.title}</div>
                    </div>
                );
            })}
        </article>
    );
}

export default TestHome;
