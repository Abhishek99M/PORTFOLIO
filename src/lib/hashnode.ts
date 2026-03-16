export interface HashnodePost {
  title: string;
  brief: string;
  slug: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImage: { url: string } | null;
  tags: { name: string }[];
}

// ─── Replace with your Hashnode username ───
const HASHNODE_USERNAME = "abhim2004";

const HASHNODE_API = "https://gql.hashnode.com";

export async function getHashnodePosts(): Promise<HashnodePost[]> {
  try {
    const response = await fetch(HASHNODE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            user(username: "${HASHNODE_USERNAME}") {
              publications(first: 1) {
                edges {
                  node {
                    posts(first: 6) {
                      edges {
                        node {
                          title
                          brief
                          slug
                          url
                          publishedAt
                          readTimeInMinutes
                          coverImage { url }
                          tags { name }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) return [];

    const data = await response.json();
    const publication =
      data?.data?.user?.publications?.edges?.[0]?.node;

    if (!publication) return [];

    return publication.posts.edges.map(
      (edge: { node: HashnodePost }) => edge.node
    );
  } catch {
    return [];
  }
}
