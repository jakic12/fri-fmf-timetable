import React, { useState } from "react";
import colorSchemes, { ColorContext } from "../util/colorSchemes";

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

export const ColorSchemeChangerContext = React.createContext({
  allNames: [],
  colorSchemeName: `context not loaded`,
  setColorScheme: () => console.log(`context not loaded`),
  setColorSchemePreview: () => console.log(`context not loaded`),
  resetColorSchemePreview: () => console.log(`context not loaded`),
});

export default ({ Component }) => {
  const [colorSchemeName, setColorSchemeName] = useState(
    localStorage.getItem("colorScheme") || `default`
  );

  const [tempSchemeName, setTempSchemeName] = useState();

  const setColorSchemePreview = (name) => {
    setTempSchemeName(name);
  };

  const resetColorSchemePreview = () => {
    setTempSchemeName(null);
  };

  const setColorScheme = (name, save) => {
    if (save) {
      localStorage.setItem("colorScheme", name);
    }
    setColorSchemeName(name);
    resetColorSchemePreview();
  };

  return (
    <ColorContext.Provider
      value={getColorScheme(tempSchemeName || colorSchemeName)}
    >
      <ColorSchemeChangerContext.Provider
        value={{
          allNames: Object.keys(colorSchemes),
          colorSchemeName,
          setColorScheme,
          setColorSchemePreview,
          resetColorSchemePreview,
        }}
      >
        <Component setColorSchemeName={(name) => setColorSchemeName(name)} />
      </ColorSchemeChangerContext.Provider>
    </ColorContext.Provider>
  );
};
