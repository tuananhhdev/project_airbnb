import { format } from "date-fns";

export const date = (date) => {
  const originalDate = new Date(date);
  return originalDate.toISOString();
};

export const formatDate = (date) => {
  const originalDate = new Date(date);
  return format(originalDate, "dd-MM-yyyy");
};
