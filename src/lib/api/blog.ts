import { db } from "../firebase";
import { collection, getDocs, query, where, orderBy, limit, getDoc, doc } from "firebase/firestore";
import { Blog, BlogCategory } from "../../types/blog";

export async function getCategories(): Promise<BlogCategory[]> {
  try {
    const q = query(collection(db, "blog-categories"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogCategory[];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function getPublishedBlogs(maxLimit?: number): Promise<Blog[]> {
  try {
    let q = query(
      collection(db, "blogs"),
      where("isPublished", "==", true)
    );

    const snapshot = await getDocs(q);
    
    let blogs = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        author: data.author || "Pamoja Africa",
        excerpt: data.excerpt || "",
      };
    }) as Blog[];

    // Sort in memory by createdAt descending to avoid composite index requirement
    blogs.sort((a, b) => {
      const dateA = new Date(typeof a.createdAt === 'string' ? a.createdAt : (a.createdAt as any)?.toDate?.() || 0).getTime();
      const dateB = new Date(typeof b.createdAt === 'string' ? b.createdAt : (b.createdAt as any)?.toDate?.() || 0).getTime();
      return dateB - dateA;
    });

    if (maxLimit) {
      blogs = blogs.slice(0, maxLimit);
    }

    return blogs;
  } catch (error) {
    console.error("Error fetching published blogs:", error);
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const q = query(
      collection(db, "blogs"),
      where("slug", "==", slug),
      limit(1)
    );
    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;
    
    const docData = snapshot.docs[0].data();
    return {
      id: snapshot.docs[0].id,
      ...docData,
      author: docData.author || "Pamoja Africa",
      excerpt: docData.excerpt || "",
    } as Blog;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
}
