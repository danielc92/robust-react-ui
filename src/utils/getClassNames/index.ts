export interface IClassNamesObject {
  [key: string]: boolean | null | undefined;
}
const getClassNames = (object: IClassNamesObject): string => {
  return Object.entries(object).reduce(
    (previousValue, currentValue) =>
      currentValue[1] ? previousValue + currentValue[0] + " " : previousValue,
    ""
  );
};
export default getClassNames;
