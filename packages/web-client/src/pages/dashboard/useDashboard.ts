import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "redux/slices/user.slice";
import { getBidItems, updateBidItems } from "redux/thunks/bid.thunks";
import useTable from "components/table/useTable";
import { getColumnData, initialValuesBidPrice } from "utils/constant";
import { FormDataPrice, ICreateItem, TGenericType } from "utils/types";
import { useFormik } from "formik";
import { bidPriceSchema } from "schema";
import { bidItemsSelector, bidItemsSuccessSelector } from "redux/selectors/bidItems.selectors";

export default  () => {
  const rows = useSelector(bidItemsSelector);
  const success = useSelector(bidItemsSuccessSelector);
  const [item, setItem] = useState<ICreateItem>();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<TGenericType>();
  const { isLoaded } = useTable();
  const { values, errors, handleChange, handleBlur, handleSubmit } =
      useFormik<FormDataPrice>({
        initialValues: initialValuesBidPrice,
        validationSchema: bidPriceSchema,
        validateOnMount: true,
        onSubmit: async (values) => {
          dispatch(
            updateBidItems({
              id: `${item?._id}`,
              data: values,
              item,
            })
          );
          values.start_price = 0;
        },
      });
  useEffect(() => {
    dispatch(getBidItems());
    dispatch(getUser());
  }, []);
  
  useEffect(() => {
    if (success) dispatch(getBidItems());
  }, [success]);
  
  const handleClickOpen = useCallback(
    (data: ICreateItem) => {
      setOpen(true);
      setItem(data);
    },
    [setOpen]
  );
  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  
  const columnData = getColumnData({ handleClickOpen });

  return {
    columnData,
    rows,
    isLoaded,
    open,
    item,
    values,
    errors,
    handleClose,
    handleSubmit,
    handleChange,
    handleBlur
  };
};