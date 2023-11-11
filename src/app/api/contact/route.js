import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { DateTime } from "luxon";
import { ValidationError } from "yup";

import { contactSchema } from "@/validator/contact";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const value = await contactSchema.validate(body);

    const serviceAccount = new JWT({
      email: process.env.SERVICE_ACCOUNT_EMAIL,
      key: process.env.SERVICE_ACCOUNT_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(process.env.SHEET_ID, serviceAccount);

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    await sheet.setHeaderRow(["Timestamp", "Name", "Email", "Message"]);
    await sheet.addRow({
      Timestamp: DateTime.now()
        .setZone(process.env.TIMEZONE)
        .toFormat("MM/dd/yyyy HH:mm:ss"),
      Name: value.name,
      Email: value.email,
      Message: value.message,
    });

    return Response.json("OK");
  } catch (err) {
    if (err instanceof ValidationError) {
      return Response.json("Invalid input!", {
        status: 400,
      });
    }
    return Response.json("Something went wrong, try again later!", {
      status: 500,
    });
  }
};
