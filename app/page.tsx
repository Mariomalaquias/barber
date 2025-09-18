import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Ola, Mario</h2>
        <p>Sexta, 2 de Fevereiro</p>

        <div className="gap-2 flex items-center mt-6">
          <Input type="text" placeholder="pesquisar" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative h-[150px] w-full mt-6">
          <Image
            src="/banner.png"
            fill
            alt="imagem do banner"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
