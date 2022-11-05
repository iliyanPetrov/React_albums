import styles from "./Cards.module.css";
import React from "react";
// import { useState } from "react";
// import Card from "../Card/Card";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";
// import FavPage from "../FavPage/FavPage";

export default function Cards() {
    const { data } = useQuery(["userInfo"], () => {
        return Axios.get(
            "https://jsonplaceholder.typicode.com/albums/1/photos"
        ).then((res) => res.data);
    });

    return (
        <div className={styles.cards}>
            <span style={{ backgroundColor: "red" }}>Hello from Content</span>
            <div>{data ? [2].title : null}</div>
            {/* <section className={styles.section_container}>
        {users
          ? users.map((user) => {
              return <Card user={user} key={user.id} />;
            })
          : null}
      </section> */}
            <hr></hr>
            {/* <FavPage users={users} /> */}
        </div>
    );
}
