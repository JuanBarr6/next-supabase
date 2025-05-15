export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex h-full bg-[#ccc]">123</div>
      {children}
    </div>
  );
}
