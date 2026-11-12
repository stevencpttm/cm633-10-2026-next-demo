export async function POST(request) {
  const data = await request.json();

  const word = data.word;

  const response = await fetch(
    `https://openrouter.ai/api/v1/chat/completions`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.API_KEY,
      },
      body: JSON.stringify({
        model: "openrouter/free",
        messages: [
          { role: "user", content: "Give me the definition of " + word },
        ],
      }),
    },
  );
  const result = await response.json();

  const definition = result.choices[0].message.content;

  return Response.json({
    word: word,
    definition: definition,
  });
}
