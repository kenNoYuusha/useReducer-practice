import { useState, useEffect } from "react";

const CODIGO = "paradigma";
const initialState = {
  value: "",
  error: false,
  loading: false,
};

const UseReducer = ({ name }) => {
  const [state, setState] = useState(initialState);
  const { value, error, loading } = state;

  useEffect(() => {
    if (!!loading) {
      setTimeout(() => {
        if (value !== CODIGO) {
          setState({ ...state, error: true, loading: false, value: "" });
        } else {
          setState({ ...state, error: false, loading: false, value: "" });
        }
      }, 3000);
    }
  }, [loading]);

  return (
    <div className="text-center">
      <h2 className="mb-4 text-3xl font-bold">{name}</h2>
      <p className="mb-4 text-lg">
        Por favor, escribe el codigo de seguridad para comprobar que quieres
        eliminar
      </p>
      {!!error && !loading && <p>Error: clave incorrecta</p>}
      {loading && <p>Cargando.....</p>}
      <input
        name="tiburoncin"
        className="px-4 py-2 rounded-md text-black outline-none"
        placeholder="Codigo de seguridad"
        value={value}
        onChange={(e) => setState({ ...state, value: e.target.value })}
      />
      <button
        onClick={() => setState({ ...state, loading: true })}
        className="ml-4 px-4 py-2 bg-indigo-700 rounded-md hover:bg-indigo-800 active:bg-indigo-900"
      >
        Comprobar
      </button>
    </div>
  );
};
export { UseReducer };
