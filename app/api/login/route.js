export async function POST(req) {
  const data = await req.json();
  const { email, password } = data;

  global.users = global.users || [];
  const user = global.users.find(u => u.email === email && u.password === password);

  if (user) {
    return new Response(JSON.stringify({ message: "Login successful!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ message: "Invalid email or password" }), {
    status: 401,
    headers: { "Content-Type": "application/json" },
  });
}
