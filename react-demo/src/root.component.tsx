import React, { useEffect } from "react";

export default function Root(props) {
  // this is a workaround for setting default url
  // ref: https://github.com/single-spa/single-spa-layout/issues/73
  useEffect(() => {
    history.replaceState(history.state, document.title, "/react");
  }, []);

  return <section>{props.name} is mounted!</section>;
}
