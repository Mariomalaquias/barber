import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import { quickSearchOpitions } from "./_constants/search";
import BookingItem from "./_components/booking-item";
import Search from "./_components/search";
import Link from "next/link";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({});

  const poluparBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Ola, Mario</h2>
        <p>Sexta, 2 de Fevereiro</p>

        <div className="mt-6">
          <Search />
        </div>

        <div className="flex gap-3 mt-3">
          {quickSearchOpitions.map((item) => (
            <Button className="gap-2" variant="secondary" key={item.title}>
              <Link href={`/barbershops?service=${item.title}`}>
                <Image
                  className=""
                  src={item.imageUrl}
                  width={16}
                  height={16}
                  alt={item.title}
                />
                {item.title}
              </Link>
            </Button>
          ))}
        </div>

        <div className="relative h-[150px] w-full mt-6">
          <Image
            src="/banner.png"
            fill
            alt="imagem do banner"
            className="rounded-xs object-cover"
          />
        </div>
        <BookingItem />
        <h2>Recomendado</h2>
        <div className="flex w-full gap-4">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2>Populares</h2>
        <div className="flex w-full gap-4">
          {poluparBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
