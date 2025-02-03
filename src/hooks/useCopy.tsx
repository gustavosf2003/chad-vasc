import { useToast } from "@/context/toast";
import copy from "copy-to-clipboard";

export const useCopyToClipboard = () => {
  //@ts-expect-error - showToast is not defined
  const { showToast } = useToast();

  const copyToClipboard = (text: string) => {
    if (showToast) return;
    const isCopy = copy(text);
    if (isCopy) {
      showToast("success", "Texto copiado com sucesso");
    } else {
      showToast("error", "Erro ao copiar texto");
    }
    return isCopy;
  };

  return { copyToClipboard };
};
