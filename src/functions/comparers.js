import * as moment from "moment";

export function CompareStrings(a, b) {
  return (a || "").localeCompare(b || "");
}

export function CompareNumbers(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;

  return 0;
}

export function CompareDates(a, b) {
  let dateA = new moment(a);
  let dateB = new moment(b);

  if (dateA.isBefore(dateB)) return 1;
  if (dateB.isBefore(dateA)) return -1;

  return 0;
}

export function CompareRow(column, comparer, direction) {
  return (a, b) => {
    let valueA = a[column];
    let valueB = b[column];

    return comparer(valueA, valueB) * direction;
  };
}
