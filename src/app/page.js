import PDFComponent from "../components/PDFComponent";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <PDFComponent password={process.env.NEXT_PUBLIC_PASSWORD}/>
    </main>
  );
}
