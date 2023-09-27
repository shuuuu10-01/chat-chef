import { OpenAI } from 'openai';

/**
 * ChatGPTに食材を使った料理を聞く
 * @param ingredients 食材名
 */
export const gptTalk = async (ingredients: string[]) => {
  const openai = new OpenAI({
    apiKey: process.env.CHAT_GPT_KEY,
  });

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `あなたは日本の家庭で毎日夕飯を作っています。
        食材を伝えられた場合、その食材を使った料理を提案してください。ただし、料理で使うことができる調味料は日本の一般家庭で用いられるもの限定とする`,
      },
      {
        role: 'user',
        content: ingredients.join('と'),
      },
    ],
  });
  return completion.choices[0].message;
};
