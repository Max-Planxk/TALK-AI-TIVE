const Groq = require('groq-sdk');
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function askClaude(pageText, userCommand, mode) {
  let systemPrompt = '';
  if (mode === 'summarize') {
    systemPrompt = 'Summarize the following webpage content clearly and briefly.';
  } else if (mode === 'simplify') {
    systemPrompt = 'Explain the following webpage content like the user is 5 years old.';
  } else if (mode === 'translate') {
    systemPrompt = 'Translate the following webpage content to Hindi.';
  } else {
    systemPrompt = 'Answer the user question based on the webpage content provided.';
  }
  const response = await client.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: 'Webpage: ' + pageText + ' User: ' + userCommand }
    ]
  });
  return response.choices[0].message.content;
}

module.exports = { askClaude };