import collegixLogo from "@/assets/collegix-logo.png";

interface PageFooterProps {
  pageNumber?: number;
  totalPages?: number;
}

export const PageFooter = ({ pageNumber, totalPages }: PageFooterProps) => {
  return (
    <footer className="absolute bottom-4 left-0 right-0 px-6 flex items-center justify-between">
      {/* Logo and company name */}
      <div className="flex items-center gap-2">
        <img src={collegixLogo} alt="Collegix.io" className="h-8 w-8 object-contain" />
        <span className="font-body text-sm font-semibold text-foreground">Collegix.io</span>
      </div>

      {/* Page number */}
      {pageNumber && totalPages && (
        <span className="font-comic text-sm text-muted-foreground">
          {pageNumber} / {totalPages}
        </span>
      )}

      {/* Copyright */}
      <span className="font-body text-xs text-muted-foreground">
        © collegix.io
      </span>
    </footer>
  );
};
