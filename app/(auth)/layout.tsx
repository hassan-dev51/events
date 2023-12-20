export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex justify-center items-center w-full bg-primary-50 bg-dotted-pattern bg-fixed bg-cover">
      {children}
    </div>
  );
}
