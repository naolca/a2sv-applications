import { ReactNode } from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Grid, Stack } from "@mui/material";
import Container from "@mui/material/Container";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased" style={{ minHeight: '100vh' }}>
    <div className="max-w-2xl mx-auto p-4 h-full">
     {children}
    </div>
    <BackgroundBeams />
  </div>
  );
}
