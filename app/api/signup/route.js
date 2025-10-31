export async function POST(req) {
  const data = await req.json();
  const { email, password } = data;

  // Simple "in-memory" storage (resets on server restart)
  // You can replace this with a database later
  global.users = global.users || [];
  global.users.push({ email, password });

  return new Response(JSON.stringify({ message: "User signed up!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
