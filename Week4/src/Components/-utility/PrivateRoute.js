import React from "react";
import { Redirect, Route } from "react-router";
export default function PrivateRoute({ component: Component, flag, ...rest }) {
  console.log("====================1");
  console.log(rest);
  console.log(flag);

  return (
    <div>
      <Route
        render={(rprops) => {
          if (!flag) {
            console.log(" i am withing Redirection");
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: rprops.location } }}
              />
            );
          }

          return <Component {...rprops} />;
        }}
      />
    </div>
  );
}