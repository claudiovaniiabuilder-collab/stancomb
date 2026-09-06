import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Container({ children, className, id }: ContainerProps) {
  return (
    <div
      id={id}
      className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)}
    >
      {children}
    </div>
  );
}
