import React, { useEffect } from "react";

export default function Root(props) {
  // this is a workaround for setting default url
  // ref: https://github.com/single-spa/single-spa-layout/issues/73
  useEffect(() => {
    history.replaceState(history.state, document.title, "/login");
  }, []);

  const mockLogin = () => {
    localStorage.setItem(
      "some_token_here",
      JSON.stringify({
        value: "some_value_here",
      })
    );

    // mock redirect after login
    window.location.href = "http://localhost:9000/react";
  };

  return <button onClick={mockLogin}>login</button>;
}
