import PDFComponent from "../components/PDFComponent";

export default async function Home() {
  const { encryptedPassword } = await (
    await fetch("https://pfd-safe.vercel.app/password", {
      method: "GET",
      cache: "no-cache",
    })
  ).json();
  return (
    <main className="flex flex-col justify-center">
      <PDFComponent password={encryptedPassword} />
    </main>
  );
}
