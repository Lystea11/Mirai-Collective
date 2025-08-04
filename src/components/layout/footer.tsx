import { Heart, Mountain } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-card text-card-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold">
              MiraiConnect
            </span>
          </Link>
          <p className="flex items-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mirai Collective. All Rights Reserved.
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center text-sm text-muted-foreground">
            Made with <Heart className="mx-1 h-4 w-4 text-destructive" /> by students for a better future.
        </div>
      </div>
    </footer>
  );
}
