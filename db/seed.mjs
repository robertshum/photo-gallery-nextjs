import { createClient } from "@libsql/client";
import "dotenv/config";

const client = createClient({
  url: process.env.TURSO_URL,
  authToken: process.env.TURSO_TOKEN,
});

import * as userSeed from "./users.mjs";
import * as albumSeed from "./albums.mjs";
import * as photoSeed from "./photos.mjs";

export const runSeed = async (seed) => {
  const parsedQueries = seed.entries.map((entry) => ({
    sql: seed.statement,
    args: entry,
  }));

  const result = await client.batch(parsedQueries, "write");

  return result;
};

const runAllSeeds = async () => {
  try {
    await runSeed(userSeed);
    console.log("User seed OK");
  } catch (err) {
    console.log("User seed BAD", err);
  }

  try {
    await runSeed(albumSeed);
    console.log("Album seed OK");
  } catch (err) {
    console.log("Album seed BAD", err);
  }

  try {
    await runSeed(photoSeed);
    console.log("Photo seed OK");
  } catch (err) {
    console.log("Photo seed BAD", err);
  }
};

runAllSeeds();
