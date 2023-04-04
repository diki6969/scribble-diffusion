import Link from "next/link";

export default function Footer({ events }) {
  return (
    <footer className="w-full my-8">

      <div className="text-center lil-text mt-8">
        Powered by{" "}
        <Link href="https://bit.ly/AboutKyyFC" target="_blank">
          IkyyOFC
        </Link>.
      </div>
    </footer>
  );
}
