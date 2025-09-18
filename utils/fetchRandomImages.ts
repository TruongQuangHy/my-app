// utils/fetchRandomImages.ts
export async function fetchRandomImages(count = 10): Promise<string[]> {
  const res = await fetch(`https://picsum.photos/v2/list?limit=${count}`);
  if (!res.ok) throw new Error("Failed to fetch images");
  const data = await res.json();
  return data.map((img: any) => img.download_url);
}
