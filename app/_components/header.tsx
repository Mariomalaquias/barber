import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { MenuIcon, TextAlignJustify } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex justify-between">
        <Image alt="imagem da logo" src="/logo.png" height={18} width={120} />
        <Button variant="secondary" size="icon" className="size-8">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
