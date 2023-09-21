import { VercelRequest, VercelResponse } from "@vercel/node";

async function handler(req, res) {
  console.log("hello i am cron job..");
  return res.json({
    message: "hello world",
  });
}

module.exports = handler;
