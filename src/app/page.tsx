import Image from "next/image";
import Form from "./_components/Form";
import FormTwo from "./_components/FormTwo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <div className="container">
          <FormTwo />
        </div>
      </section>
    </main>
  );
}
