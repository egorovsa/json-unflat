interface JsonData {
  [key: string]: string | number | boolean;
}

function isPathIncludesIntoLongerOne(json: JsonData, key: string) {
  return Object.keys(json).some(
    (keyItem) => keyItem.includes(key) && key !== keyItem
  );
}

export function JsonUnFlat(json: Record<string, string | number | boolean>) {
  const unFlatten: Object = {};

  Object.entries(json).forEach(([key, value]) => {
    let branchLink: Record<string, any> = unFlatten;

    if (isPathIncludesIntoLongerOne(json, key)) {
      return;
    }

    const splittedKey = key.split(".");

    splittedKey.forEach((splittedItem, index) => {
      if (branchLink[splittedItem] === undefined) {
        if (splittedKey.length - 1 === index) {
          branchLink[splittedItem] = value;
        } else {
          branchLink[splittedItem] = {};
          branchLink = branchLink[splittedItem];
        }
      } else {
        branchLink = branchLink[splittedItem];
      }
    });
  });

  return unFlatten;
}
