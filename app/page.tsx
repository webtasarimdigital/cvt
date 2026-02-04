import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <h1 className="text-6xl font-bold tracking-tighter">
          CVT Logistic
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-xl text-gray-400">
            Yapım Aşamasındadır
          </p>
          <p className="text-sm text-gray-500">
            En kısa sürede hizmetinizdeyiz.
          </p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} CVT Logistic. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
