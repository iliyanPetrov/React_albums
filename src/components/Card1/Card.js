import React from "react";
import styles from "./Card.module.css";
import { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Card = ({ user }) => {
    const [icon, setIcon] = useState(["inline", "none"]);
    const [content, setContent] = useState("Mark as favorited");
    const handleFav = () => {
        if (user.favorited === false) {
            user.favorited = true;
        } else {
            user.favorited = false;
        }
        if (icon[0] === "inline") {
            setIcon(["none", "inline"]);
            setContent("Remove favorited");
        } else {
            setIcon(["inline", "none"]);
            setContent("Mark as favorited");
        }
    };
    return (
        <div className={styles.parent}>
            <div className={styles.thumbnail}>
                <img src={user.thumbnailUrl} alt="color picture" />
            </div>
            {user.title.length <= 35 ? (
                <h3>{user.title}</h3>
            ) : (
                <h3>{`${user.title.slice(0, 44)}...`}</h3>
            )}

            <img src={user.url} alt="not found" />
            <p>
                <button onClick={() => handleFav(user.id)}>
                    {content[0]}
                    <MdFavoriteBorder
                        style={{ display: icon[0] }}
                        className={styles.icon}
                    />
                    <MdFavorite
                        style={{ display: icon[1] }}
                        className={styles.icon}
                    />
                </button>
            </p>
        </div>
    );
};

export default Card;
