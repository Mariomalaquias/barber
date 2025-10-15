import Image from "next/image";
import { Barbershop } from "../generated/prisma";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import Link from "next/link";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-[159px] p-0">
      <CardContent className="p-0 px-2 pt-2">
        <div className="relative h-[159px] w-full">
          <Image
            fill
            className="object-cover rounded-2xl"
            alt={barbershop.name}
            src={barbershop.imageUrl}
          />
          <Badge className="absolute left-2 top-2" variant="secondary">
            <StarIcon size={12} className="fill-primary text-primary" />
            <p>5,0</p>
          </Badge>
        </div>
        <div className="px-2 pb-3">
          <h3 className="font-semibold overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h3>
          <p className="text-sm text-gray-400 text-nowrap">
            {barbershop.address}
          </p>
          <Button variant="secondary" asChild>
            <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
