// import { db } from "../../prisma/db.server";

// import { categories, posts, author } from "../utils/placeholder-data";

// async function seed() {
//   await Promise.all(
//     categories.map(async (category) => {
//       return db.category.create({
//         data: category,
//       });
//     }),
//   );

//   await Promise.all(
//     author.map(async (author) => {
//       return db.author.create({
//         data: author,
//       });
//     }),
//   );

//   await Promise.all(
//     posts.map(async (post) => {
//       const datePlaceholder = "2024-01-31T09:05:01.126Z";
//       return db.popularPost.create({
//         data: {
//           title: post.title,
//           id_author: post.id_author,
//           created_at: datePlaceholder,
//           type: post.type,
//         },
//       });
//     }),
//   );
// }

// seed();
