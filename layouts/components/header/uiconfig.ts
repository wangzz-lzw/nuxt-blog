export const useUiConfig = () => {
  const menus = [
    { name: "首页", path: "/" },
    { name: "关于", path: "/about" },
    // { name: '联系', path: '/contact' },
    // { name: '文章', path: '/blog' },
    // {name:'资源', path: '/resource'}
  ];
  return {
    menus,
  };
};
