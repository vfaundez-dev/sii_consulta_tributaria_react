import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useCopy } from "../hooks/useCopy";

const CopyClipboard = ({ jsonElement }) => {

  const { copied, copyToClipboard } = useCopy();

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-border dark:bg-accent dark:text-accent-foreground dark:hover:bg-accent dark:hover:border-border dark:hover:text-secondary-foreground transition-all duration-200 bg-transparent hover:shadow-md"
        onClick={ () => copyToClipboard({ jsonElement }) }
      >
        { !copied
          ? (
            <>
              <Copy className="w-4 h-4 mr-1" />
              Copiar
            </>
          ) : (
            <>
              <Check className="w-4 h-4 mr-1" />
              Copiado
            </>
          )
        }
      </Button>
    </>
  )
}

export default CopyClipboard