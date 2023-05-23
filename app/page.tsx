// Import your Client Component

async function getPosts() {
  const res = await fetch("https://...");
  const posts = await res.json();
  return posts;
}
export const metadata = {
  title: "My Page Title",
};
export default async function Page() {
  return "...";
}
