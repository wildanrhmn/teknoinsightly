import {
  format,
  isToday,
  isYesterday,
  differenceInDays,
  differenceInWeeks,
} from "date-fns";

function formatDate(datestring: string) {
  const date = new Date(datestring);
  const today = new Date();
  

  if (isToday(date)) {
    return "Hari ini";
  } else if (isYesterday(date)) {
    return "Kemarin";
  } else if (differenceInDays(today, date) < 7) {
    return format(date, "d MMMM");
  } else if (differenceInWeeks(today, date) < 4) {
    return format(date, "MMMM d");
  } else {
    return format(date, "MMMM d, yyyy");
  }
}

function formatDetailDate(datestring: string) {
  const date = new Date(datestring);
  return format(date, "d MMMM yyyy / HH:mm");
}

export { formatDate, formatDetailDate };
