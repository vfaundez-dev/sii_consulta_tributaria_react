import * as cheerio from "cheerio";
import { useState } from "react";

export const useParseDataHtml = () => {

  const [parsedData, setParsedData] = useState(null);

  const getParseDataHtml = (html) => {
    try {

      const $ = cheerio.load(html);

      const getText = (selector) => {
        const el = $(selector);
        return el.length > 0 ? el.text().trim() : null;
      };

      /*-- Extraccion de datos --*/

      const razonSocial = getText('strong:contains("Nombre o Razón Social")')
        ? $('strong:contains("Nombre o Razón Social")').parent().next("div").text().trim()
        : null;

      if (!razonSocial) {
        setParsedData(null);
        return null;
      }
    
      const rut = getText('b:contains("RUT Contribuyente")')
        ? $('b:contains("RUT Contribuyente")').parent().next("div").text().trim()
        : null;

      const inicioActividades = getText('span:contains("Contribuyente presenta Inicio de Actividades")')
        ?.split(": ")[1] || null;

      const fechaInicioActividades = getText('span:contains("Fecha de Inicio de Actividades")')
        ?.split(": ")[1] || null;

      const pagarMonedaExtranjera = getText('span:contains("moneda extranjera")')
        ?.split(": ")[1] || null;

      const esEmpresaMenorTamano = getText('span:contains("Empresa de Menor Tamaño")')
        ?.split(": ")[1] || null;

      // Tabla actividades
      const actividades = [];
      const strongActividades = $('strong:contains("Actividades")');
      if (strongActividades.length > 0) {
        strongActividades.nextAll("table.tabla").first().find("tr").each((i, row) => {
          if (i > 0) {
            const cols = $(row).find("td font");
            actividades.push({
              giro: $(cols[0]).text().trim(),
              codigo: parseInt($(cols[1]).text().trim()) || null,
              categoria: $(cols[2]).text().trim(),
              afecta: $(cols[3]).text().trim(),
              fecha: $(cols[4]).text().trim(),
            });
          }
        });
      }

      // Tabla timbrados
      const timbrados = [];
      const strongTimbrados = $('strong:contains("Timbrados")');
      if (strongTimbrados.length > 0) {
        strongTimbrados.nextAll("table.tabla").first().find("tr").each((i, row) => {
          if (i > 0) {
            const cols = $(row).find("td font");
            timbrados.push({
              documento: $(cols[0]).text().trim(),
              "anio ultimo timbraje": parseInt($(cols[1]).text().trim()) || null,
            });
          }
        });
      }

      const result = {
        razonSocial,
        RUT: rut,
        "inicio actividades": inicioActividades,
        "fecha inicio actividades": fechaInicioActividades,
        "autorizado pagar con moneda extranjera": pagarMonedaExtranjera,
        "es empresa de menor tamaño": esEmpresaMenorTamano,
        actividades,
        "documentos timbrados": timbrados,
      };

      setParsedData(result);
      return result;
      
    } catch (error) {
      console.log('Error parseando datos HTML: ', error);
      setParsedData(null);
      return null;
    }
  }

  return { parsedData, getParseDataHtml }
}
