import { useContext } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrushCleaning } from 'lucide-react';
import CopyClipboard from "./CopyClipboard";
import { SiiDataContext } from "../context/siiDataContext";

const LeftSection = () => {

  const { siiData, loading, error, clearData } = useContext(SiiDataContext);

  return (
    <div className="lg:col-span-6">
      <Card className="bg-card border-border rounded-sm shadow-lg">
        <CardContent>
          <div className="flex items-center justify-end mb-4 gap-4">
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-border dark:bg-transparent dark:text-secondary-foreground dark:hover:bg-accent dark:hover:border-border dark:hover:text-accent-foreground transition-all duration-200 bg-transparent hover:shadow-md"
              onClick={ clearData }
            >
              <BrushCleaning />
              Limpiar
            </Button>
            <CopyClipboard jsonElement={ siiData || '' } />
          </div>
          <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 overflow-y-auto max-h-[600px] bg-gray-100 dark:bg-gray-800/50">
            <pre className="min-h-80 font-mono text-secondary-foreground text-md">
              <code>{
                loading
                  ? <span className="text-muted-foreground font-mono text-md">Cargando...</span>
                  : error
                    ? <span className="text-red-600 font-mono text-md">{ error?.message || 'Error desconocido...' }</span>
                    : JSON.stringify(siiData, null, 2)
              }</code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LeftSection