import { useSelector } from "react-redux";
import { IState } from "utils/types";

const useTable = () => {
  const isLoaded = useSelector((state: IState) => state.bidItems?.isLoading);

  return {
    isLoaded,
  };
};

export default useTable;
