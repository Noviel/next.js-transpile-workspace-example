import React from "react";

import { f } from "./static";

export const Compik: React.FC<{}> = () => {
  return (
    <div>
      <b>Static: {f()} Dynamic: </b>
    </div>
  );
};
