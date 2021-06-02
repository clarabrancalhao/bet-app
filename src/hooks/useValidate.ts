import { useDispatch } from 'react-redux';

export const useValidate = () => {
  const dispatch = useDispatch();

  const handleValidation = (
    ref: React.RefObject<HTMLInputElement>,
    type: string,
    action: (param: boolean) => void
  ) => {
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const isValid =
      type === 'email'
        ? emailRegex.test(ref.current!.value.toLowerCase())
        : passwordRegex.test(ref.current!.value);
    if (!isValid) {
      dispatch(action(true));
      return;
    }
    dispatch(action(false));
    return;
  };

  return handleValidation;
};

export default useValidate;
