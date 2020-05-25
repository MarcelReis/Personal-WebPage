export type PageMeta = {
  title: string;
  description: string;
  thumb: string;
};

export type PostData = PageMeta & {
  created: string;
  tags: string[];
};
