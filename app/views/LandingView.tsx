import Link from "next/link";

function LandingPage() {
  return (
    <main className="bg-[url('/images/landing-page-image-desktop.jpg')] max-md:bg-[url('/images/landing-page-image.jpg')] h-screen">
      <div className="flex flex-col justify-center px-10  gap-5 lg:gap-10 lg:px-40 size-full text-white">
          <h1 className="lg:text-6xl text-5xl font-bold">Welcome to TejeBarber</h1>
          <Link className="lg:text-4xl text-2xl font-bold hover:scale-105" href="/sign-in">
            Reserva Ya
          </Link>
      </div>
    </main>
  );
}

export default LandingPage;
