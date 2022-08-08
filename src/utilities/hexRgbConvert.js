import hexRgb from "hex-rgb";
import rgbHex from "rgb-hex";

const hexToRgb = (hex, type, opacity) => {
  // Hex is hex code, type is either string or object, opacity is optional. If you want to add custom opacity to it
  const { red, green, blue, alpha } = hexRgb(hex);
  switch (type) {
    case "string": {
      return `rgb${
        opacity ? "a" : alpha !== 1 ? "a" : ""
      }(${red}, ${green}, ${blue}${
        opacity ? `${"," + opacity}` : alpha !== 1 ? `${"," + alpha}` : ""
      })`;
    }

    case "object": {
      return { red, green, blue, alpha: opacity ? opacity : alpha };
    }

    default: {
      return { red, green, blue, alpha: opacity ? opacity : alpha };
    }
  }
};

const rgbToHex = (rgb) => {
  return rgbHex(rgb);
};

const choices = {
  hexToRgb,
  rgbToHex,
};

export default choices;
