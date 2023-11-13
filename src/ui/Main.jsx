function Main({ children }) {
  return (
    <main
      className="grid grid-cols-[auto_1fr]  max-w-4xl mx-auto mt-10 grid-rows-[auto_1fr] px-5
      shadow-md  rounded-lg h-2/3 relative"
    >
      {children}
    </main>
  );
}

export default Main;
