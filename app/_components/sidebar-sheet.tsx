import {
  Calendar1Icon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  TextAlignJustify,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { quickSearchOpitions } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import Image from "next/image";

const SidebarSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center border-b border-solid py-5">
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"></AvatarImage>
        </Avatar>

        <div>
          <p className="font-bold">Maria Silva</p>
          <p className="text-xs">mariasilvas@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5 border-b border-solid py-3">
        <SheetClose asChild>
          <Button className="justify-start gap-2" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Inicio
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <Calendar1Icon />
          Agendamento
        </Button>
      </div>

      <div className="flex flex-col gap-3 p-5 border-b border-solid py-3">
        {quickSearchOpitions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              alt="imagem de referencia"
              src={option.imageUrl}
              height={18}
              width={18}
            />
            <h2>{option.title}</h2>
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-3 p-5 border-b border-solid py-3">
        <Button className="justify-start gap-2" variant="ghost">
          <LogOutIcon size={18} />
          Sair da Conta
        </Button>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;
