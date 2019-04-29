import React from "react";
import { NextStatelessComponent } from "next";

import { Compik } from "@next-problem/shared/Component";

const Page: NextStatelessComponent<{}> = () => {
  const [value, setValue] = React.useState("Awaiting");

  React.useEffect(() => {
    import("@next-problem/shared/dynamic").then(m => {
      setValue(m.dynamic("Hey!"));
    });
  }, []);

  return (
    <div>
      <h1>import() failure example</h1>
      <Compik />
      <p>dynamic value: {value}</p>
    </div>
  );
};

export default Page;
