import { db } from "../../prisma/db.server";

import { Category, Post, PopularList, Comment } from "./definiton/definition";
import { unstable_noStore as noStore } from "next/cache";
import { formatDate, formatDetailDate } from "@/utils/date-formatter";

const ITEMS_PER_PAGE = 6;
export async function fetchAllPosts(currentPage: number = 1): Promise<Post[]> {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
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
      orderBy: {
        created_at: "desc",
      },
      take: ITEMS_PER_PAGE,
      skip: offset,
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

export async function fetchAllPages({
  type,
  category,
}: {
  type?: string;
  category?: string;
}): Promise<number> {
  noStore();
  try {
    const whereClause: any = {};

    if (type) {
      whereClause.OR = [{ type: type }];
    }
    if (category) {
      whereClause.OR = [{ category: { slug: category } }];
    }

    const data = await db.post.count({
      where: whereClause,
    });

    const totalPages = Math.ceil(Number(data) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Database Error");
  }
}

export async function fetchPostsById(id: string): Promise<Post> {
  noStore();
  try {
    const data = await db.post.findUnique({
      where: {
        id: id,
      },
      include: {
        category: {
          select: {
            id: true,
          },
        },
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    const formattedData = {
      ...data,
      created_at: formatDate(data.created_at),
    };

    return formattedData;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Database Error");
  }
}

export async function fetchRelatedList(
  id_category: string,
): Promise<PopularList[]> {
  noStore();
  try {
    const data = await db.post.findMany({
      select: {
        id: true,
        title: true,
        id_author: true,
        created_at: true,
        type: true,
        image: true,
        id_category: true,
        author: {
          select: {
            name: true,
          },
        },
      },
      where: {
        id_category: id_category,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    const formattedData = data
      .filter((related: any) => related.id_category !== id_category)
      .map((post: any) => {
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
  type: string,
  currentPage: number = 1,
): Promise<Post[]> {
  noStore();

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
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
      orderBy: {
        created_at: "desc",
      },
      take: ITEMS_PER_PAGE,
      skip: offset,
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
  category: string,
  currentPage: number = 1,
): Promise<Post[]> {
  noStore();

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await db.post.findMany({
      where: {
        category: {
          slug: category,
        },
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
      orderBy: {
        created_at: "desc",
      },
      take: ITEMS_PER_PAGE,
      skip: offset,
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
      orderBy: {
        created_at: "desc",
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

export async function fetchCategories(
  type: "article" | "tutorial",
): Promise<Category[]> {
  try {
    const data = await db.category.findMany({
      where: {
        type: type,
      },
      orderBy: {
        name: "asc",
      },
    });
    return data;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Database Error");
  }
}

export async function fetchComment(id_post: string): Promise<Comment[]> {
  try {
    const data = await db.comment.findMany({
      where: {
        id_post: id_post,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    const formattedData = data.map((data: any) => {
      return {
        ...data,
        created_at: formatDetailDate(data.created_at),
      };
    });
    return formattedData;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Database Error");
  }
}
