// src/pages/api/getDefaultConnection.ts

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Retrieve the database connection info from environment variables
  const dbHost = process.env.DB_HOST;
  const dbUser = process.env.DB_USER;
  const dbPwd = process.env.DB_PWD;

  // Check if all required environment variables are set
  if (!dbHost || !dbUser || !dbPwd) {
    return res.status(500).json({ error: "Database configuration is incomplete" });
  }

  // Return the database connection info
  res.status(200).json({
    DB_HOST: dbHost,
    DB_USER: dbUser,
    DB_PWD: dbPwd,
  });
}
