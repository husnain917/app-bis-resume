const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DateFormatter = (requireFormat, separator) => {
  const formatList = requireFormat.split("-");
  const specficSeparator =
    requireFormat === "month-dd-yyyy" || requireFormat === "dd-month-yyyy"
      ? " "
      : separator;
  const dateformat =
    SelectFormat(formatList[0]) +
    specficSeparator +
    SelectFormat(formatList[1]) +
    separator +
    SelectFormat(formatList[2]);
  return dateformat;
};

export { DateFormatter };
function SelectFormat(dateKey) {
  const currentdate = new Date();
  let dateStrng;
  switch (dateKey) {
    case "yyyy":
      dateStrng = currentdate.getFullYear();
      break;
    case "mm":
      dateStrng = currentdate.getMonth() === 0 ? "01" : currentdate.getMonth();
      break;
    case "dd":
      dateStrng = currentdate.getDate();
      break;
    case "month":
      dateStrng = monthNames[currentdate.getMonth()];
      break;
    default:
      dateStrng = "";
      break;
  }
  return dateStrng;
}
