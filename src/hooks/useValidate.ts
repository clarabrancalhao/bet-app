import { useDispatch } from 'react-redux';

export const useValidate = () => {
  const dispatch = useDispatch();

  const handleValidation = (
    ref: React.RefObject<HTMLInputElement>,
    type: string,
    action: (param: boolean) => void
  ) => {
    let isOk;
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (type === 'email') {
      isOk = emailRegex.test(ref.current!.value.toLowerCase());
    }
    if (type === 'password') {
      isOk = passwordRegex.test(ref.current!.value);
    }
    if (!isOk) {
      dispatch(action(true));
    }
    if (isOk) {
      dispatch(action(false));
    }
  };

  return handleValidation;
};

export default useValidate;
