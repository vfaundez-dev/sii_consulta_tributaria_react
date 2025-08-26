import axios from "axios";
import { useState } from "react";

export const useZeusData = () => {
  const URL_ZEUS = 'https://zeus.sii.cl/cvc_cgi/stc/getstc';
  const [siiData, setSiiData] = useState(null);

  const siiFetchData = async (rut, dv, code, captcha) => {
    try {

      const postData = new URLSearchParams({
        RUT: rut,
        DV: dv,
        PRG: "STC",
        OPC: "NOR",
        txt_code: code,
        txt_captcha: captcha,
      });

      const response = await axios.post( URL_ZEUS, postData, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      const data = response.data;
      setSiiData(data);
      return data;
      
    } catch (error) {
      console.log('Error obteniendo datos desde Zeus: ', error);
      setSiiData(null);
      return null;
    }
  }

  return { siiData, siiFetchData }
}
