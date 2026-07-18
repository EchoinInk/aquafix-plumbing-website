import Link from "next/link";
import { AquaLogo } from "./components/AquaSite";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <AquaLogo />
      <p className="eyebrow">404 error</p>
      <h1>That pipe seems to lead nowhere.</h1>
      <p>The page you requested is unavailable. Head back home or book a plumber from the main site.</p>
      <div className="button-row center">
        <Link className="btn primary" href="/">Return home</Link>
        <Link className="btn secondary" href="/contact">Contact AquaFix</Link>
      </div>
    </main>
  );
}
