import PDFComponent from "../components/PDFComponent";
import { headers } from "next/headers";

export default async function Home() {
  const host = headers().get("host");
  const { encryptedPassword } = await (
    await fetch(`http://${host}/api/password`, {
      cache: "no-cache",
    })
  ).json();
  return (
    <main className="flex flex-col justify-center">
      <PDFComponent password={encryptedPassword} />
    </main>
  );
}
