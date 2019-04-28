import React from "react";
import { NextStatelessComponent } from "next";

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
      <p>dynamic value: {value}</p>
    </div>
  );
};

export default Page;
