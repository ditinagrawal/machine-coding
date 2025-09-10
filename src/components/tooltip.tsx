export const Tooltip = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Tooltip</h2>
      <div className="flex items-center justify-center relative group">
        <span className="text-4xl cursor-pointer">🏠</span>
        <span className="absolute -top-12 bg-neutral-200 py-2 px-4 rounded-full text-sm tracking-wider hidden group-hover:block whitespace-nowrap shadow-md font-semibold">
          A Beautiful Home
        </span>
      </div>
    </div>
  );
};
