import { useState } from "react"

export const useCopy = () => {

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async ({ jsonElement }) => {
    try {

      await navigator.clipboard.writeText(JSON.stringify(jsonElement, null, 2))
      setCopied(true)
      setTimeout( () => setCopied(false), 2000 );

    } catch (err) {
      throw new Error('Failed to copy: ', err);
    }
  }

  return { copied, copyToClipboard }
}
