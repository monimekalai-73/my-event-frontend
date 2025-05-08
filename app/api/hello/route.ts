// app/api/hello/route.ts
export const runtime = 'edge';

export async function GET() {
    return new Response(JSON.stringify({ message: 'Hello from the edge!' }), {
      status: 200,
    });
  }
  