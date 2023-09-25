import { OpenAI } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.CHAT_GPT_KEY,
});

/**
 * ChatGPTに食材を使った料理を聞く
 * @param {string[]} ingredients 食材名
 */
export const gptTalk = async (ingredients) => {
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

export const CHAT_GPT_DATA = {
  role: 'assistant',
  content:
    'とりのムネ肉を使った料理の提案ですね。\n以下にいくつかの料理をご提案します。\n\n1. 鶏の唐揚げ\n   鶏のムネ肉を手羽先のように切り、つけ揚げ用の衣をつけて揚げます。醤油やケチャップ、塩やこしょうを加えたタレで味付けしても美味しいです。\n\n2. 鶏の照り焼き\n   鶏のムネ肉を照り焼き用に切り、照り焼きのたれを絡めて焼きます。ご飯やサラダと一緒に食べると良いです。\n\n3. 鶏のカツレツ\n   鶏のムネ肉を薄く切り、カツレツ用の衣をつけて揚げます。キャベツやソースを添えて召し上がれます。\n\n4. 鶏の野菜炒め\n   鶏のムネ肉とお好きな野菜を炒め、醤油や酒、味噌で味付けします。炒め物はバリエーション豊かにアレンジすることができますので、お好みの野菜や調味料で楽しんでみてください。\n\n以上、いくつかの提案です。お好きな料理をお選びいただき、お楽しみください。',
};
