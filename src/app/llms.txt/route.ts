import { buildLlmsTxt } from "@/lib/ai-discovery";

export async function GET() {
  const body = buildLlmsTxt(false);

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Robots-Tag": "all",
    },
  });
}
