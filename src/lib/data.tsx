import { db } from "../../prisma/db.server";

import { Category, Post, PopularList } from "./definiton/definition";
import { unstable_noStore as noStore } from "next/cache";
import formatDate from "@/utils/date-formatter";

export async function fetchAllPosts(): Promise<Post[]> {
  noStore();

  try {
    const data = await db.post.findMany({
      include: {
        category: {
          select: {
            slug: true,
          },
        },
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    const formattedData = data.map((post: any) => {
      return {
        ...post,
        created_at: formatDate(post.created_at),
      };
    });

    return formattedData;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Database Error");
  }
}
export async function fetchPostsByType(
  type: "tutorial" | "article"
): Promise<Post[]> {
  noStore();
  try {
    const data = await db.post.findMany({
      where: {
        type: type,
      },
      include: {
        category: {
          select: {
            slug: true,
          },
        },
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    const formattedData = data.map((post: any) => {
      return {
        ...post,
        created_at: formatDate(post.created_at),
      };
    });
    return formattedData;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Database Error");
  }
}

export async function fetchPostsByCategory(
  category: string, type: "tutorial" | "article"
): Promise<Post[]> {
  noStore();

  const dataCategory = await db.category.findUnique({
    where: {
      slug: category,
    },
  });

  if (!dataCategory) {
    return [];
  }
  try {
    const data = await db.post.findMany({
      where: {
        type: type,
        id_category: dataCategory.id,
      },
      include: {
        category: {
          select: {
            slug: true,
          },
        },
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    const formattedData = data.map((post: any) => {
      return {
        ...post,
        created_at: formatDate(post.created_at),
      };
    })
    return formattedData;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Database Error");
  }
}

export async function fetchAllPopularList(): Promise<PopularList[]> {
  noStore();
  try {
    const data = await db.popularPost.findMany({
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    const formattedData = data.map((post: any) => {
      return {
        ...post,
        created_at: formatDate(post.created_at),
      };
    });
    return formattedData;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Database Error");
  }
}

export async function fetchCategories(): Promise<Category[]> {
  try {
    const data = await db.category.findMany();
    return data;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Database Error");
  }
}
