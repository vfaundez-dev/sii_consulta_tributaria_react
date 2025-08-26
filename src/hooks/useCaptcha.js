import axios from "axios";
import { useState } from "react";

export const useCaptcha = () => {
  const [code, setCode] = useState(null);
  const [captcha, setCaptcha] = useState(null);
  const URL_CAPTCHA = 'https://zeus.sii.cl/cvc_cgi/stc/CViewCaptcha.cgi';

  const getCaptcha = async () => {
    try {

      const response = await axios.post( URL_CAPTCHA,
        new URLSearchParams({ oper: 0 })
      );

      const json = response.data;
      if (!json.txtCaptcha) return null;
      
      const decoded = atob(json.txtCaptcha);
      const code = decoded.substring(36, 40);
      const captcha = json.txtCaptcha;
      
      setCode(code);
      setCaptcha(captcha);
      return { code, captcha };
      
    } catch (error) {
      console.log('Error obteniendo captcha: ', error);
      setCode(null);
      setCaptcha(null);
      return null;
    }
  } 

  return { code, captcha, getCaptcha }
}