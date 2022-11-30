import React, { useReducer, useEffect } from "react";

const CODIGO = "paradigma";


const UseReducer = ({ name }) => {
  const [state, dispatch] = useReducer(reducerObject, initialState);
  const { value, error, loading, deleted, confirm } = state;

  //EFECTOS
  useEffect(() => {
    if (!!loading) {
      setTimeout(() => {
        if (value === CODIGO) {
          dispatch({ type: "CONFIRM" });
        } else {
          dispatch({ type: "ERROR" });
        }
      }, 3000);
    }
  }, [loading]);

  //DEPENDIENDO DEL ESTADO SE MOSTRARA UNA U OTRA VISTA
  if (!confirm && !deleted) {
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
          className="px-4 py-2 rounded-md text-black outline-none"
          placeholder="Codigo de seguridad"
          value={value}
          onChange={(e) => dispatch({ type: "WRITE", payload: e.target.value })}
        />
        <button
          className="ml-4 px-4 py-2 bg-indigo-700 rounded-md hover:bg-indigo-800 active:bg-indigo-900"
          onClick={() => dispatch({ type: "CHECK" })}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!!confirm && !deleted) {
    return (
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold">Are you Sure?</h2>
        <p className="mb-4 text-lg">That you wanna delete this thing!!!</p>
        <div className="flex flex-row gap-x-4">
          <button
            className="ml-4 px-4 py-2 bg-zinc-800 rounded-md hover:bg-zinc-900 active:bg-black border-2 border-white"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Cancel
          </button>
          <button
            className="ml-4 px-4 py-2 bg-indigo-700 rounded-md hover:bg-indigo-800 active:bg-indigo-900"
            onClick={() => dispatch({ type: "DELETE" })}
          >
            Aceptar
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold">Eliminado</h2>

        <button
          className="px-4 py-2 bg-emerald-700 rounded-md hover:bg-emerald-800 active:bg-emerald-900"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Undo
        </button>
      </div>
    );
  }
};

const initialState = {
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirm: false,
  };

const reducerIf = (state, action) => {
  if (action.type === "ERROR") {
    return {
      ...state,
      error: true,
      loading: false,
      value: "",
    };
  } else if (action.type === "CONFIRM") {
    return {
      ...state,
      error: false,
      loading: false,
      value: "",
      confirm: true,
    };
  } else if (action.type === "CHECK") {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === "DELETE") {
    return {
      ...state,
      deleted: true,
    };
  } else if (action.type === "RESET") {
    return {
      ...state,
      confirm: false,
      deleted: false,
    };
  } else if (action.type === "WRITE") {
    return {
      ...state,
      value: action.payload,
    };
  } else {
    return { ...state };
  }
};

const recuerSwitch = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        error: true,
        loading: false,
        value: "",
      };
    case "CONFIRM":
      return {
        ...state,
        error: false,
        loading: false,
        value: "",
        confirm: true,
      };
    case "CHECK":
      return {
        ...state,
        loading: true,
      };
    case "DELETE":
      return {
        ...state,
        deleted: true,
      };
    case "RESET":
      return {
        ...state,
        confirm: false,
        deleted: false,
      };
    case "WRITE":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return { ...state };
  }
};

const allActions = (state, payload) => ({
  ERROR: {
    ...state,
    error: true,
    loading: false,
    value: "",
  },
  CONFIRM: {
    ...state,
    error: false,
    loading: false,
    value: "",
    confirm: true,
  },
  CHECK: {
    ...state,
    loading: true,
  },
  DELETE: {
    ...state,
    deleted: true,
  },
  RESET: {
    ...state,
    confirm: false,
    deleted: false,
  },
  WRITE: {
    ...state,
    value: payload,
  },
});

const reducerObject = (state, action) => {
  if (allActions(state)[action.type]) {
    return allActions(state, action.payload)[action.type];
  } else {
    return { ...state };
  }
};

export { UseReducer };
