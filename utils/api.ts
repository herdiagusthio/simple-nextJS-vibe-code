export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function fetchExternalData(): Promise<Post> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts/1`;
    const response = await fetch(apiUrl, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: Post = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("Request timed out");
    }
    throw error;
  }
}
