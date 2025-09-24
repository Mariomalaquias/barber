import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({});

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
            className="rounded-xs object-cover"
          />
        </div>
        <h3>Agendamento</h3>
        <Card className="mt-6 p-0">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3>Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="./Banner.png" />
                </Avatar>
                <p>Barbearia </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center px-5 border-l-2">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>
        <h2>Recomendado</h2>
        <div className="flex w-full gap-4">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
