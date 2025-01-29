import type React from "react";
import { FileText, PlusCircle, Settings, HelpCircle } from "lucide-react";
import { Button } from "@/src/shared/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/shared/ui/tooltip";

interface NavbarProps {
  activeIcon: string;
  setActiveIcon: (icon: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeIcon,
  setActiveIcon,
}) => {
  const icons = [
    { name: "reports", Icon: FileText, label: "日報" },
    { name: "new", Icon: PlusCircle, label: "新規作成" },
    { name: "settings", Icon: Settings, label: "設定" },
    { name: "help", Icon: HelpCircle, label: "ヘルプ" },
  ];

  return (
    <TooltipProvider>
      <nav className="w-16 bg-gray-800 flex flex-col items-center py-4">
        {icons.map(({ name, Icon, label }) => (
          <Tooltip key={name}>
            <TooltipTrigger asChild>
              <Button
                variant={activeIcon === name ? "secondary" : "ghost"}
                size="icon"
                className="mb-4"
                onClick={() => setActiveIcon(name)}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </TooltipProvider>
  );
};
