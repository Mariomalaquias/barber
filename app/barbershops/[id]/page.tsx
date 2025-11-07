import PhoneItem from "@/app/_components/phone-item";
import ServiceItem from "@/app/_components/service-item";
import SidebarSheet from "@/app/_components/sidebar-sheet";
import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BarbershopPageProps {
  params: {
    id: string;
  };
}

const barbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    return notFound();
  }

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl}
          fill
          alt={barbershop.name}
          className="object-cover"
        ></Image>

        <Button
          size="icon"
          variant="secondary"
          className="absolute top-4 left-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-4"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </div>
      <div className="p-5">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>
        <div className="flex items-center gap-2">
          <StarIcon className="text-primary fill-primary" size={18} />
          <p className="text-sm">5 (20 avaliações)</p>
        </div>
      </div>
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Sobre Nós</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>
      <div className="p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400 mb-4">
          Serviços
        </h2>
        <div className="space-y-3 border-b border-solid p-5">
          {barbershop.services.map((service) => (
            <ServiceItem
              key={service.id}
              barbershop={barbershop}
              service={service}
            />
          ))}
        </div>
        <div className="space-y-3 p-5">
          {barbershop.phones.map((phone, index) => (
            <PhoneItem key={index} phone={phone} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default barbershopPage;
