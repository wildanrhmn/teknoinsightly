import { db } from "../../prisma/db.server";

import { categories, author } from "../utils/placeholder-data";

async function seed() {
  await Promise.all(
    categories.map(async (category) => {
      return db.category.create({
        data: category,
      });
    })
  );

  await db.author.create({
    data: author[0],
  });
}

seed();
