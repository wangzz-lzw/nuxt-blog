/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)", // 使用 :root 中的变量
        background: "var(--background)",
      },
    },
  },
};
