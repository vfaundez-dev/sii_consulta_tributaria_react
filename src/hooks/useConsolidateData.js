import { useCaptcha } from "./useCaptcha";
import { useZeusData } from "./useZeusData";
import { useParseDataHtml } from "./useParseDataHtml";
import { useState } from "react";

export const useConsolidateData = () => {
  // Custom Hooks
  const { getCaptcha } = useCaptcha();
  const { siiFetchData } = useZeusData();
  const { getParseDataHtml } = useParseDataHtml();
  // Estados
  const [siiData, setSiiData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearData = () => {
    setError(null);
    setSiiData();
  }

  const getConsolidateData = async ({ rut, dv }) => {
    setLoading(true);
    setError(null);

    try {

      // Obtener Captcha
      const captchaData = await getCaptcha();
      if (!captchaData) {
        const err = { message: "No se pudo obtener Captcha" };
        setError(err);
      }

      // Obtener datos en format HTML
      const htmlData = await siiFetchData(rut, dv, captchaData.code, captchaData.captcha);
      if (!htmlData) {
        const err = { message: "Error obteniendo datos desde Zeus" };
        setError(err);
      }

      // Parsar datos a JSON
      const parsedData = getParseDataHtml(htmlData);
      if (!parsedData) {
        const err = { message: "Error Procesando datos" };
        setError(err);
      }

      // Guardar en context
      setSiiData(parsedData);
      return parsedData;
      
    } catch (e) {
      const err = { message: e.message || "Error desconocido en consolidación." };
      setError(err);
      return err;
    } finally {
      setLoading(false);
    }

  }


  return { siiData, getConsolidateData, clearData, loading, error };
}
