import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "user";

export const BookingTitle = (record: TBooking): string => {
  return record.user?.toString() || String(record.id);
};
