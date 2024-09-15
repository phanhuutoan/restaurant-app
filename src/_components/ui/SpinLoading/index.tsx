import classNames from 'classnames';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface SpinLoadingProps {
  classNames?: string;
}

export const SpinLoading = (props: SpinLoadingProps) => {
  const spinClasses = classNames(
    'animate-spin text-slate-900 h-10 w-10',
    props.classNames,
  );
  return <AiOutlineLoading3Quarters className={spinClasses} />;
};
