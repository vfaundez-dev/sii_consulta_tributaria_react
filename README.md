# VFH - Consulta Tributaria a SII Chile (React Version)

⚠️ **IMPORTANTE**: Este proyecto fue realizado únicamente con fines educativos y profesionales, como parte de mi portafolio personal. No me hago responsable del uso indebido de este sistema. ⚠️

---

## Descripción del Proyecto

Este es un sistema desarrollado con **React** que permite realizar consultas directas al sistema web del Servicio de Impuestos Internos (SII) de Chile, utilizando la plataforma Zeus. Este sistema se encarga de:

1. **Generación dinámica de captcha**.
2. **Consulta al sistema "Zeus" del SII** utilizando la librería **Axios**, que devuelve la información en formato HTML.
3. **Extracción de información** del HTML utilizando la librería **Cheerio** y transformandola a formato JSON.
4. **Despliegue de la información obtenida** en formato `JSON` para su visualización en la interfaz de usuario.

## Requisitos

- Tener instalado **Node.js** (versión 19 o superior).
- Tener instalado **pnpm** (gestor de paquetes que se utiliza en este proyecto).
- Conocimientos básicos de **React** y **JavaScript**.

## Respuesta de la API

La API del SII devuelve la información en formato HTML, que es procesada y transformada a formato JSON para su uso en la aplicación. La estructura de la respuesta incluye campos como:

- **razon_social**: La razón social del contribuyente.
- **fecha_inicio_actividades**: La fecha de inicio de actividades del contribuyente.
- **giros_comerciales**: Los giros comerciales asociados al contribuyente.
- **informacion_adicional**: Cualquier otra información relevante.

- Para realizar una consulta, el sistema envía una solicitud POST con los siguientes parámetros en el cuerpo de la solicitud:

  ```json
  {
    "rut": "12345678",
    "dv": "9"
  }
  ```

- La respuesta será un objeto JSON con la información obtenida similar a esta:

  ```json
  {
    "status": "success",
    "message": "Proceso completado",
    "data": {
      "razonSocial": "Nombre",
      "RUT": "12345678-9",
      "inicio actividades": "",
      "fecha inicio actividades": "",
      "autorizado pagar con moneda extranjera": "",
      "es empresa de menor tamaño": "",
      "actividades": [
        {"LISTADO DE ACTIVIDADES"}
      ],
      "documentos timbrados": [
        {"LISTADO DE DOCUMENTOS TIMBRADOS"}
      ]
    }
  }
  ```

## Consideraciones

- El sistema **no realiza validaciones** sobre los datos ingresados (RUT y DV). Si se proporciona información incorrecta, simplemente se mostrará la respuesta devuelta por el servidor del SII, datos vacios o un error.
- El sistema puede presentar algunos errores al solicitar captchas de forma interna, pero se puede realizar la petición nuevamente.
- **Uso bajo su propio riesgo**: Este sistema interactúa directamente con un servicio externo y podría estar sujeto a cambios o restricciones en el servicio del SII.
- **No se garantiza la disponibilidad** del servicio, ya que depende del sistema del SII.
- **Limitaciones de uso**: Este sistema está diseñado para consultas específicas y no debe ser utilizado para fines malintencionados o ilegales.
- **No se almacena información sensible**: El sistema no guarda ningún dato ingresado por el usuario, como RUT o DV.

## Instalación

1. Clone este repositorio:

   ```bash
   git clone https://github.com/vfaundez-dev/sii_consulta_tributaria_react.git
   cd sii_consulta_tributaria
   ```

2. Instale las dependencias:

   ```bash
   pnpm install
   ```

3. Inicie la aplicación:

   ```bash
   pnpm dev
   ```

4. Este sistema no utiliza base de datos local o backend, por lo que no es necesario configurar variables de entorno.

## Portafolio

Este proyecto forma parte de mi portafolio como desarrollador. Puedes encontrar más información y proyectos en: [https://vfh-portfolio.netlify.app/](https://vfh-portfolio.netlify.app/).

---

⚠️ **IMPORTANTE**: Este sistema fue realizado únicamente con fines educativos y profesionales, como parte de mi portafolio personal, y para reforzar mis conocimientos de programación. No me hago responsable del uso indebido de este sistema. ⚠️

---

## Licencia

![Creative Commons License](https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png)  
Este proyecto está licenciado bajo la [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](https://creativecommons.org/licenses/by-nc-nd/4.0/).

### Resumen

- **Atribución**: Debe proporcionar crédito adecuado al autor original.
- **No Comercial**: No puede utilizar el material para fines comerciales.
- **Sin Derivados**: Si remezcla, transforma o crea a partir del material, no puede distribuir el material modificado.

Para más detalles, consulte el archivo `LICENSE` incluido en este repositorio.
