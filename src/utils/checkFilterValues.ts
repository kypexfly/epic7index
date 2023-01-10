const checkFilterValues = (value : string, filterArray : string[]) : boolean | undefined => {
    if (typeof value === "undefined") return;
    if (filterArray.includes("All")) {
      return true;
    }
    let tempChecks = [];
    for (let i = 0; i < filterArray.length; i++) {
      tempChecks.push(value.toString().indexOf(filterArray[i]) > -1);
    }
    return tempChecks.some((value) => value === true);
  };
  
  export default checkFilterValues;
  