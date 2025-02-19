import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { fileListAtom } from "@/src/entities/files/model";
import { getLocalFiles } from "@/src/features/api/getLocalFiles";

export const useFetchFiles = (path: string) => {
  const setFileList = useSetAtom(fileListAtom);

  useEffect(() => {
    const fetchFiles = async () => {
      const files = await getLocalFiles(path);
      if (files) {
        setFileList(files);
      }
    };
    fetchFiles();
  }, [path, setFileList]);
};
