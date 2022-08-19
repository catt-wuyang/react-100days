/**
 * React Hooks best practices
 *
 * 1. 理解函数式编程
 * 2. 开启 eslint-plugin-react-hooks
 */
import React, {
  useState,
  useMemo,
  useRef,
  useCallback,
  useReducer,
} from "react";

const App: React.FC<{ title: string }> = ({ title }) => {
  const [name, setName] = useState("Nick");
  const [hide, setHide] = useState(false);

  const dom = useRef(null);

  const handleClick = useCallback(() => {
    setHide((hide) => !hide);
  }, []);

  const requestService = () => {};

  // const {loading, error, value} = async () => {
  //   awiat console.log(value)
  // }

  return useMemo(
    () => (
      <div>
        <div>{title}</div>
        <div onClick={handleClick}>button</div>
        <div onClick={requestService}>button</div>
      </div>
    ),
    [title]
  );
};

App.defaultProps = {
  title: "Function Component",
};
