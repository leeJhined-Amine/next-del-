import Image from "next/image";

export default function Home() {
  return (
    <section>
      <h1>Welcome to my beautiful Portfolio</h1>
      <div className="flex w-3/4 mx-auto items-center gap-[30%]">
        <img className="w-[400px]" src="/NoPfp.webp" />
        <p className="w-3/4 text-lg">My name is... I'm..., I'm a fullstack developer!</p>
      </div>
    </section>
  );
}
