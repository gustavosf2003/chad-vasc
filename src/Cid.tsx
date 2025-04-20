import { useEffect, useState } from "react";
// import { CID_DATA } from "./lib/cid";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

interface ResultType {
  codigo: string;
  nome: string;
  codigo_nome?: string;
}

import Layout from "./components/Layout";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { useCopyToClipboard } from "./hooks/useCopy";

function CardiovascularRiskTest() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<ResultType[]>([]); // Change to an array to store multiple results
  const { copyToClipboard } = useCopyToClipboard();
  const handleSearch = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    // Função para normalizar e limpar caracteres especiais
    // const normalizeString = (str: string) =>
    //   str
    //     .normalize("NFD") // Normaliza o texto, separando caracteres acentuados
    //     .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    //     .replace(/[^a-zA-Z0-9\s]/g, "") // Remove caracteres especiais (não alfanuméricos)
    //     .toLowerCase(); // Coloca tudo em minúsculas para uma busca insensível a maiúsculas/minúsculas

    // Use filter instead of find to get all matching items
    const foundItems = [] as ResultType[];

    setResults(foundItems);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setResults([]); // Clear the results when search term is empty
    }
  }, [searchTerm]);

  return (
    <Layout
      className="flex flex-col items-center justify-center"
      currentPageName="Buscar CID"
    >
      <form className="w-80" onSubmit={handleSearch}>
        <Input
          type="text"
          className="w-full p-2 mb-2 border"
          placeholder="Buscar pelo nome"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button disabled={searchTerm.length < 2} className="w-full mt-4">
          Buscar
        </Button>
      </form>

      {results.length > 0 ? (
        <div className="mt-10 lg:overflow-y-auto w-80 lg:w-96 lg:h-96 ">
          {results.map((result, index) => (
            <div key={index} className="p-3 mb-4 border rounded-lg shadow-md">
              <div className="flex items-center gap-1">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <p>CID:</p>{" "}
                    <span className="text-2xl font-medium">
                      {result.codigo}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(`${result.codigo}`)}
                    className=" flex justify-center bg-gray-300 rounded-lg p-1.5"
                  >
                    <DocumentDuplicateIcon width={16} />
                  </button>
                </div>
              </div>
              <p className="mt-3">{result.codigo_nome}</p>
            </div>
          ))}
        </div>
      ) : (
        searchTerm.length > 2 &&
        results.length == 0 && (
          <p className="mt-10 text-center">Nenhum resultado encontrado</p>
        )
      )}
    </Layout>
  );
}

export default CardiovascularRiskTest;
