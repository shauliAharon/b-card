import {
  TableHead,
  Table,
  TableCell,
  TableBody,
  TableRow,
} from "@mui/material";
import React from "react";
import { useState, MouseEvent } from "react";

interface Post {
  title: string;
  subtitle: string;
  author: string;
  createAt: string | Date;
}

type Event = MouseEvent<HTMLButtonElement>;

const SetPost = () => {
  const INITIAL_POST: Post = {
    title: "",
    subtitle: "",
    author: "",
    createAt: "",
  };
  const [islog, setLog] = useState(false);
  const [post, setPOst] = useState(INITIAL_POST);
  const [posts, setPOsts] = useState<[] | Post[]>([]);

  const createNewPost = (e: Event) => {
    e.preventDefault();
    setPOsts((prev) => [...prev, { ...post, createAt: new Date() }]);
    return setPOst(INITIAL_POST);
  };

  //   setLog = () => {
  //     islog = !islog;
  //     console.log(islog);
  //   };
  console.log(islog);
  return (
    <>
      <button onClick={() => setLog((prev) => !prev)}>change</button>{" "}
      <button>{islog ? "logout" : "login"}</button>
      <p>{islog}</p>
      <hr />
      <h1>{post.title}</h1>
      <h2>{post.subtitle}</h2>
      <p>{post.author}</p>
      <form style={{ padding: 16 }}>
        <input
          style={{ margin: 6 }}
          value={post.title}
          type="text"
          placeholder="title"
          onChange={(e) =>
            setPOst((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <input
          style={{ margin: 6 }}
          value={post.subtitle}
          type="text"
          placeholder="subtitle"
          onChange={(e) =>
            setPOst((prev) => ({ ...prev, subtitle: e.target.value }))
          }
        />
        <input
          style={{ margin: 6 }}
          value={post.author}
          type="text"
          placeholder="author"
          onChange={(e) =>
            setPOst((prev) => ({ ...prev, author: e.target.value }))
          }
        />

        <button
          style={{ margin: 6 }}
          onClick={createNewPost}
          disabled={!post.title || !post.subtitle || !post.author}
        >
          test
        </button>
      </form>
      <Table>
        <TableHead>
          <TableCell>No.</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Sub Title</TableCell>
          <TableCell>Author</TableCell>
          <TableCell>Created At</TableCell>
        </TableHead>
        <TableBody>
          {posts.map((post, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.subtitle}</TableCell>
              <TableCell>{post.author}</TableCell>
              <TableCell>{post.createAt.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {index + 1}.{post.title} , {post.subtitle} , {post.author},
            {post.createAt},
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default SetPost;
