export type Suggestion = {
  date: string;
  contents: Content[];
};

export type Content = {
  chatGPT: string;
  ingredients: string[];
};
