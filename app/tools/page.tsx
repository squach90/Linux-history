import { Footer } from "../page/Footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Linux History",
  description: "Linux History: The Linux History writed by @squach90",
};

/* eslint-disable @next/next/no-img-element */
const Tools: React.FC = () => {
  return (
    <div>
      <div className="relative px-5 md:px-20">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent text-3xl md:text-5xl font-bold mt-12 md:mt-24 text-center">
          Outils utilisés
        </h1>
        <div className=" mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src="/images/chatgpt.jpeg"
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
              <a href="https://chatgpt.com/">
                <h3 className="mt-0.5 text-lg text-gray-900">ChatGPT</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                ChatGPT est un modèle de langage développé par OpenAI, conçu
                pour comprendre et générer du texte en réponse à des questions
                et requêtes en langage naturel. Il est basé sur
                l&apos;architecture GPT (Generative Pre-trained Transformer) et
                a été formé sur une large base de données jusqu&apos;en janvier
                2022. ChatGPT peut fournir des informations, des réponses et
                engager des conversations sur une variété de sujets, offrant
                ainsi une expérience interactive et éducative aux utilisateurs.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src="/images/nextjs.png"
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
              <a href="https://nextjs.org/">
                <h3 className="mt-0.5 text-lg text-gray-900">Next.js</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Next.js est un framework open-source basé sur React utilisé pour
                créer des applications web modernes. Il simplifie le
                développement en offrant un rendu côté serveur par défaut et la
                possibilité de générer des applications statiques. Next.js est
                réputé pour ses performances optimisées, son support du routage
                automatique et sa facilité d&apos;intégration avec des API
                externes, ce qui en fait un choix populaire pour les
                développeurs web cherchant à construire des sites robustes et
                évolutifs.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src="/images/shadcnui.png"
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
              <a href="https://ui.shadcn.com/">
                <h3 className="mt-0.5 text-lg text-gray-900">ShadcnUI</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Des composants magnifiquement conçus que vous pouvez copier et
                coller dans vos applications. Accessible. Personnalisable. Open
                source. ainsi une expérience interactive et éducative aux
                utilisateurs.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src="/images/ts.svg.png"
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
              <a href="https://www.typescriptlang.org/fr/docs/">
                <h3 className="mt-0.5 text-lg text-gray-900">
                  TypeScript (TSX)
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                TSX (Transactional Synchronization Extensions) est une extension
                d&apos;instruction d&apos;Intel pour améliorer la performance
                des applications multithread en permettant l&apos;exécution
                atomique de blocs de code dans des transactions, similaire aux
                transactions de base de données. ainsi une expérience
                interactive et éducative aux utilisateurs.
              </p>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tools;
