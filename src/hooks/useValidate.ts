import { useDispatch } from 'react-redux';

interface IProps {
  ref: React.RefObject<HTMLInputElement>;
  regex: RegExp;
  action: (param: boolean) => void;
}

export const useValidate: () => void = () => {
  const dispatch = useDispatch();

  const handleValidation = (props: IProps) => {
    const isOk = props?.regex.test(props.ref.current!.value);

    console.log(isOk);

    if (!isOk) {
      dispatch(props?.action(true));
    }
    if (isOk) {
      dispatch(props?.action(false));
    }
  };

  return [handleValidation];
};
