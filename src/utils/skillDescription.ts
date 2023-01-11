import convertToFlatVsPerc from "./flatOrPerc";

const skillDescription = (text : string, valuesToReplace : number[], fixedDecimals = 1) => {
  const textSplit = text.split("{{variable}}");
  const splitLength = textSplit.length;

  for (let i = 0; i < splitLength - 1; i++) {
    textSplit.splice(i * 2 + 1, 0, convertToFlatVsPerc(valuesToReplace[i], fixedDecimals)
    );
  }

  return textSplit.join("");
};

export default skillDescription;
