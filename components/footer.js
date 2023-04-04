import Link from "next/link";

export default function Footer({ events }) {
  return (
    <footer className="w-full my-8">
      <div className="text-center lil-text mt-8">
        <div className="inline-block py-3 px-4 border bg-gray-200 rounded-lg">
          🍿 Want to build an app like this?{" "}
          <Link
            href="https://github.com/replicate/scribble-diffusion"
            target="_blank"
          >
            Fork it on GitHub
          </Link>{" "}
          or check out the{" "}
          <Link href="https://youtu.be/6z07OdbrWOs" target="_blank">
            video tutorial
          </Link>
          .
        </div>
      </div>

      <div className="text-center lil-text mt-8">
        Powered by{" "}
        <Link href="https://github.com/lllyasviel/ControlNet" target="_blank">
          ControlNet
        </Link>{" "}.
      </div>
    </footer>
  );
}
