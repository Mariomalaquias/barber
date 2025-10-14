import { db } from "@/app/_lib/prisma";
import Image from "next/image";

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
  });
  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl}
          fill
          alt="Foto da barbearia"
          className="object-cover"
        ></Image>
      </div>
    </div>
  );
};

export default barbershopPage;
