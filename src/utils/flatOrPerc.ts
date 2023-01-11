const flatOrPerc = (value : number , fixedDecimal = 1) => {
  if (!Number.isSafeInteger(value)) {
    return (value * 100).toFixed(fixedDecimal).toString() + "%";
  }

  return value.toString();
};

export default flatOrPerc;
