interface Articles {
  content: string;
  id: number;
  title: string;
  description: string;
}

export const MainModel = () => {
  const articles = ref<Articles[]>([]);

  return {
    articles,
  };
};
