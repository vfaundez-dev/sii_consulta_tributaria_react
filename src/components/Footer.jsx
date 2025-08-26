
const Footer = () => {
  return (
    <footer className="bg-card text-muted-foreground text-xs text-center py-4 mt-4">
      <p className="mb-2">
        Este sistema es de solo uso y desarrollo educativo, como proyecto para mi portafolio profesional. No me hago
        responsable por el mal uso de esta.
      </p>
      <a
        href="https://vfh-portfolio.netlify.app"
        target="_blank"
        className="font-bold text-muted-foreground dark:text-secondary-foreground"
        rel="noopener noreferrer"
      >
        © 2025 VFH DEV - Todos los derechos reservados
      </a>
    </footer>
  )
}

export default Footer