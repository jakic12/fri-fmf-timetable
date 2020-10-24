import React, { useState } from "react";
import colorSchemes from "../util/colorSchemes";

const getColorScheme = (name) => handleImports(name, colorSchemes[name]);

const handleImports = (name, scheme) => {
  let out = Object.assign({}, scheme);
  if (out.importStyle) {
    const import1 = out.importStyle;
    delete out["importStyle"];
    if (import1 in colorSchemes)
      out = Object.assign({}, colorSchemes[import1], out);
    else throw new Error(`Error at import, ${name} tried to import ${import1}`);

    return handleImports(import1, out);
  } else {
    return out;
  }
};

export default ({ Component }) => {
  // COLOR SCHEME
  const [colorSchemeName, setColorSchemeName] = useState(`default`);

  // COLOR SCHEME

  return (
    <Component
      colorScheme={getColorScheme(colorSchemeName)}
      setColorSchemeName={(name) => setColorSchemeName(name)}
    />
  );
};
