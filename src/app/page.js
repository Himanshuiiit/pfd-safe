import PDFComponent from "../components/PDFComponent";

export default async function Home() {
  const { encryptedPassword } = await (
    await fetch("http://localhost:3000/password", {
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
