import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-2xl text-center">

        <h1
          className="text-8xl font-black"
          style={{ color: "var(--accent)" }}
        >
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-6 leading-8 text-zinc-400">
          The page you are looking for doesn't exist or may have been moved.
          Please return to the homepage to continue exploring our salon.
        </p>

        <Link
          to="/"
          className="mt-10 inline-block rounded-full px-8 py-4 font-semibold transition hover:scale-105"
          style={{
            background: "var(--accent)",
            color: "#000",
          }}
        >
          Back to Home
        </Link>

      </div>
    </section>
  );
}

export default NotFound;
