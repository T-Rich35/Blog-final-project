import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [isPending, setIsPending] = useState(false);
  // const history = useHistory("/");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      content,
      image,
    };

    setIsPending(true);

    axios
      .post("https://tcr-blog-backend.herokuapp.com/blog", {
        title,
        content,
        image,
      })
      .then(() => {
        setIsPending(false);
        props.history.push("/");
      })
      .catch((error) => {
        console.log("Blog", error);
      });
  };

  return (
    <div className="add">
      <form className="addform " onSubmit={handleSubmit}>
        <div className="addformgroup">
          <input
            type="img"
            placeholder="Add in URL Image Here "
            className="writeimg"
            value={image}
            autoFocus={true}
            onChange={(e) => setImage(e.target.value)}
          />

          <input
            type="text"
            placeholder="title"
            className="writeinput"
            value={title}
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="addformgroup">
          <textarea
            placeholder="new blog"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="writeinput writetext"
          ></textarea>
        </div>
        {!isPending && (
          <button className="writesubmit" type="submit">
            publish
          </button>
        )}
        {isPending && (
          <button className="writesubmit" type="submit" disabled>
            Adding blog
          </button>
        )}
      </form>
    </div>
  );
}
