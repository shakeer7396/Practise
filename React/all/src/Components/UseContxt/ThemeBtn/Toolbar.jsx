import React, { useContext } from "react";
import { ThemeContext } from "./ContextProvider";

const Toolbar = () => {
  const theme = useContext(ThemeContext);

  return <Button theme={theme} />;
};

const Button = ({ theme }) => {
  return (
    <button
      style={{
        background: theme === "dark" ? "#333" : "#eee",
        color: '#fff',
      }}
    >
      Button Switch
    </button>
  );
};

export default Toolbar;
