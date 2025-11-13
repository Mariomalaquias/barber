import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import { quickSearchOpitions } from "./_constants/search";
import BookingItem from "./_components/booking-item";
import Search from "./_components/search";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./_lib/auth";

const Home = async () => {
  const session = await getServerSession(authOptions);
  const barbershops = await db.barbershop.findMany({});
  const poluparBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  const confirmedBookings = session?.user
    ? await db.booking.findMany({
        where: {
          userId: (session.user as any).id,
          date: {
            gte: new Date(),
          },
        },
        include: {
          service: {
            include: {
              barbershop: true,
            },
          },
        },
        orderBy: {
          date: "asc",
        },
      })
    : [];

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

        <div className="relative h-[150px] w-full ">
          <Image
            src="/banner.png"
            fill
            alt="imagem do banner"
            className="rounded-xs object-cover"
          />
        </div>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <div className="flex overflow-x-auto [&::-webkit-scrolbar]:hidden gap-3">
          {confirmedBookings.map((booking) => (
            <BookingItem key={booking.id} booking={booking} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendado
        </h2>
        <div className="flex w-full gap-4 overflow-auto [&::-webkit-scrolbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex overflow-x-auto [&::-webkit-scrolbar]:hidden gap-3">
          {poluparBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
