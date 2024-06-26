import Link from "next/link";

export const Footer = () => {
  return (
    <div className="max-w-none w-full border-t mt-32 py-12 md:py-14 gap-4 border-t-accent relative mt-20">
      <div className="max-w-2xl flex flex-col gap-4 m-auto">
        <p className="text-center">
          Made with ❤️ by{" "}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-foreground underline"
          >
            @squach90
          </a>
        </p>
        <p className="text-center text-muted-foreground">
          Tools for this&ensp;
          <a
            className="text-center underline text-muted-foreground"
            href="/tools"
          >
            web site
          </a>
        </p>
      </div>
    </div>
  );
};
