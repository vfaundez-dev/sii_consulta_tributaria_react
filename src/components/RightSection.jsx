import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useContext } from "react";
import { SiiDataContext } from "../context/siiDataContext";

const RightSection = () => {
  const [rut, setRut] = useState('');
  const [dv, setDv] = useState('');
  const { getConsolidateData } = useContext(SiiDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getConsolidateData({ rut, dv });
  }

  return (
    <div className="lg:col-span-3 space-y-6">

      <div className="text-secondary-foreground text-sm leading-relaxed">
        <p className="mb-4">
          Esta API permite consultar información tributaria del Servicio de Impuestos Internos (SII) de Chile
          mediante el RUT del contribuyente a través del sistema Zeus.
        </p>
        <p className="mb-4">
          Obtiene datos como razón social, fecha de inicio de actividades, giros comerciales y más información
          relevante para verificaciones tributarias.
        </p>
      </div>

      <Card className="bg-card border-border rounded-sm shadow-lg">
        <CardContent>
          <h3 className="text-lg font-semibold mb-4 text-card-foreground">RUT a Consultar</h3>

          <form className="space-y-4" onSubmit={ handleSubmit }>
            <div className="flex gap-3">
              <Input
                type="text"
                name="rut"
                placeholder="RUT sin puntos ni guión"
                className="bg-input border-border text-foreground placeholder-muted-foreground hover:border-primary focus:border-muted-foreground focus:ring-1 focus:ring-muted-foreground transition-colors duration-200 flex-1"
                value={ rut }
                onChange={ (e) => setRut(e.target.value) }
              />
              <Input
                type="text"
                name="dv"
                placeholder="DV"
                maxLength={1}
                className="bg-input border-border text-foreground placeholder-muted-foreground hover:border-primary focus:border-muted-foreground focus:ring-1 focus:ring-muted-foreground transition-colors duration-200 w-16"
                value={ dv }
                onChange={ (e) => setDv(e.target.value) }
              />
            </div>
            <Button
              type="submit"
              className="cursor-pointer w-full bg-primary hover:bg-primary/90 text-primary-foreground border-0 rounded-lg py-2.5 font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Consultar
            </Button>
          </form>
        </CardContent>
      </Card>

      <Button
        variant="outline"
        className="cursor-pointer w-full border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground dark:border-border dark:text-muted-foreground dark:bg-transparent dark:hover:bg-primary dark:hover:border-primary dark:hover:text-secondary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 ease-in-out transform bg-transparent"
        asChild
      >
        <a href="https://github.com/vfaundez-dev" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-github">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
          </svg>
          Ver en GitHub
        </a>
      </Button>

    </div>
  )
}

export default RightSection