import React, { useState } from "react";

export default function Root(props) {
  // save token(user info) in this micro app 'global' store
  const [token, setToken] = useState(localStorage.getItem("some_token_here"));

  // mock session timeout
  if (!token) {
    window.location.href = "http://localhost:9000/login";
  }

  return <section>{props.name} is mounted!</section>;
}
