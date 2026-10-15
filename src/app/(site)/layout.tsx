import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ler } from "@/lib/store";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const site = await ler("site");
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar aviso={site.aviso} avisoLink={site.avisoLink} instagram={site.instagram} />
      <main className="flex-1">{children}</main>
      <Footer instagram={site.instagram} />
    </div>
  );
}
