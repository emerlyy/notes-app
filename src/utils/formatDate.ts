import dateFormat from "dateformat";

export const formatDate = (stringDate: string): string => {
  const date = new Date(stringDate);
  return dateFormat(date, "dd mmm yyyy");
};
