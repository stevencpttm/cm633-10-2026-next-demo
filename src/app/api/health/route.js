export function GET() {
  return Response.json({
    status: 200,
  });
}

export function POST() {
  return Response.json({
    created: true,
  });
}
