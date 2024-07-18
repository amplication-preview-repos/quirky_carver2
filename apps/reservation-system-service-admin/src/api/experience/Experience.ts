import { JsonValue } from "type-fest";
import { Guide } from "../guide/Guide";
import { Booking } from "../booking/Booking";

export type Experience = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  duration: number | null;
  price: number | null;
  pricingRule: JsonValue;
  description: string | null;
  guide?: Guide | null;
  bookings?: Array<Booking>;
};
