"use client";

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/WZLzOKpGFE3
 */
import Link from "next/link";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useRef } from "react";

export function Componenttest() {
  const videoRef = useRef(null);
  const imageRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
    imageRef.current.hidden = true;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-primary-color  ">
      {/* NAVBAR */}
      <header className="flex items-center py-4 lg:py-6 xl:py-4 sticky top-0 backdrop-blur-sm bg-color-header-footer z-10 ">
        <div className="container flex items-center gap-4 px-4 lg:px-6 xl:gap-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <img src="/logo/logoterrario.png" width={80} />
          </Link>
          <nav className="ml-auto space-x-4 text-lg">
            <Link
              className="font-medium transition-colors text-gray-500 hover:text-primary-color dark:text-gray-400 dark:hover:text-gray-50"
              href="/"
            >
              Início
            </Link>
            <Link
              className="font-medium transition-colors text-gray-500 hover:text-primary-color dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Produtos
            </Link>

            <Link
              className="font-medium transition-colors text-gray-500 hover:text-primary-color dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Contato
            </Link>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1">
        <section className="w-full  bg-gray-100 dark:bg-gray-800">
          <div className="container flex items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="relative">
              <video ref={videoRef} width={600}>
                <source src="/videos/meuvideo.mp4" type="video/mp4" />
                Desculpe, seu navegador não suporta vídeos HTML5.
              </video>
              <img
                ref={imageRef}
                onClick={handlePlay}
                src="/assets/botao-play.png"
                className="absolute top-44 left-52 w-32 "
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Terrários Artesanais
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Adicione um toque de{" "}
                <span className="text-primary-color font-bold">natureza</span> à
                sua casa com nossos terrários exclusivos.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Conheça Nossos Trabalho
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                O ambiente mais natural possível que seu pet precisa 🌿🍃
              </p>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
              <div className="flex flex-col  gap-2">
                <img
                  alt="Terrarium"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="300"
                  src="/placeholder.svg"
                  width="500"
                />
                <div className="space-y-2 text-left">
                  <h3 className="text-2xl font-bold">Terrários de vidro</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-bold text-lg">
                    Saiba mais
                  </p>
                </div>
              </div>
              <div className="flex flex-col  gap-2">
                <img
                  alt="Terrarium"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="300"
                  src="/placeholder.svg"
                  width="500"
                />
                <div className="space-y-2 text-left">
                  <h3 className="text-2xl font-bold">Decoração de terrário</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-bold text-lg">
                    Saiba mais
                  </p>
                </div>
              </div>
              <div className="flex flex-col  gap-2">
                <img
                  alt="Terrarium"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="300"
                  src="/placeholder.svg"
                  width="500"
                />
                <div className="space-y-2 text-left">
                  <h3 className="text-2xl font-bold">Terrários Bioativos</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-bold text-lg">
                    Saiba mais
                  </p>
                </div>
              </div>
              <div className="flex flex-col  gap-2">
                <img
                  alt="Terrarium"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="300"
                  src="/placeholder.svg"
                  width="500"
                />
                <div className="space-y-2 text-left">
                  <h3 className="text-2xl font-bold">
                    Enriquecimento ambiental para psitacídeos
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 font-bold text-lg">
                    Saiba mais
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Clientes Satisfeitos
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Nossos terrários trazem alegria para os pets de todo o Brasil!
                Veja o que nossos clientes estão falando.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 items-start md:grid-cols-2 md:items-center gap-4 md:gap-8 lg:gap-12">
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Avatar"
                  className="rounded-full border border-gray-200 object-cover object-center dark:border-gray-800"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="space-y-2 text-left">
                  <h3 className="text-2xl font-bold">Cliente 1.</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Lorem ipsum dolor sit amet. 33 quae tenetur eum quisquam
                    porro et rerum voluptatibus At impedit animi ex
                    exercitationem consequatur aut debitis omnis quo dolore
                    vitae! Qui quaerat quia est accusantium aliquid est
                    asperiores blanditiis qui animi laudantium eum autem
                    cumque."
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Avatar"
                  className="rounded-full border border-gray-200 object-cover object-center dark:border-gray-800"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="space-y-2 text-left">
                  <h3 className="text-2xl font-bold">Cliente 2.</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Lorem ipsum dolor sit amet. 33 quae tenetur eum quisquam
                    porro et rerum voluptatibus At impedit animi ex
                    exercitationem consequatur aut debitis omnis quo dolore
                    vitae! Qui quaerat quia est accusantium aliquid est
                    asperiores blanditiis qui animi laudantium eum autem
                    cumque."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="m-auto w-9/12">
          <div
            className={` grid justify-items-center m-5 my-10 p-5 border-2 border-x-color-primary border-y-color-secundary rounded-xl shadow-2xl bg-white transition-transform duration-300 ease-in-out transform hover:scale-110`}
          >
            <div className="my-2"></div>

            <h3 className="my-2 text-3xl font-bold"> Gostou? </h3>

            <p className="my-4  text-xl   hover:text-gray-600 transition-colors duration-300">
              {" "}
              Vem conhecer nosso serviço feito especialmente para você e seu
              pet!{" "}
            </p>

            <Link
              href={"/form"}
              className="my-5 bg-tertiary-color hover:bg-gradient-to-r hover:from-secondary-color  hover:to-primary-color text-black font-bold py-2 px-6 rounded-full shadow-md transition-transform  ease-in-out transform hover:scale-110 active:text-red-600  "
            >
              Solicitar Orçamento Gratuito.
            </Link>
          </div>
        </section>

        <section className="w-screen text-center mt-32">
          <h2 className="text-6xl">Ou se preferir</h2>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Fale conosco!
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Tem alguma dúvida? Entre em contato, estamos sempre à disposição
                para te ajudar.
              </p>
            </div>
            <form className="grid max-w-md gap-4 mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Nome" type="text" />
                <Input placeholder="Sobrenome" type="text" />
              </div>
              <Input placeholder="Email ou Telefone" type="email" />
              <Input placeholder="Assunto (Opicional)" type="text" />
              <Textarea
                className="min-h-[150px] w-full"
                placeholder="Sua mensagem."
              />
              <Button className="w-full" type="submit">
                Enviar
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="pt-12 md:pb-10 backdrop-blur-sm bg-color-header-footer">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 md:flex-row md:gap-10 lg:gap-16">
          <nav className="flex flex-col text-start gap-4 text-sm lg:gap-6 ">
            <Link className="font-medium" href="#">
              Endereço
            </Link>
            <Link className="font-medium" href="#">
              Email
            </Link>
            <Link className="font-medium" href="#">
              Telefone
            </Link>
            <Link className="font-medium" href="#">
              Horário de funcionamento
            </Link>
          </nav>
          <Link
            className="ml-auto flex flex-col items-center gap-2 font-semibold text-xl"
            href="#"
          >
            <span className="text-primary-color text-4xl">Nature BIO</span>
            <span className="text-tertiary-color">Terrários</span>
          </Link>

          <div className="grid gap-4 text-center md:ml-auto lg:gap-6">
            <Link
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <span>Instagram</span>
            </Link>
            <Link
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <span>Whatsapp</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
