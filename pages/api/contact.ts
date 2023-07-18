import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    //this is the place where we will/might call the DB
    console.log(req.body);
    res.json({ message: "Form successfully submitted!" });
  }
}
