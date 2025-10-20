import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import {
  Calendar1Icon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  TextAlignJustify,
} from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { quickSearchOpitions } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import SidebarButton from "./sidebar-sheet";
import SidebarSheet from "./sidebar-sheet";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex justify-between">
        <Image alt="imagem da logo" src="/logo.png" height={18} width={120} />

        <Sheet>
          <SheetTrigger>
            <Button variant="secondary" size="icon" className="size-8">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
