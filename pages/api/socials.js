// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {socials} from "./data/socials";

export default function handler(req, res) {
  res.status(200).json({ socials });
}
