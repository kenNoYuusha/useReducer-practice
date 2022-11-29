import { useState, useEffect } from "react";
const UseState = ({ name }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


//   useEffect(()=>{
//     console.log('efecto.......')
//     if(!!loading) {
//         setTimeout(()=>{
//             console.log('validacion....')
//             setLoading(false);
//         },3000)
//     }
//   }, [loading])

  return (
    <div className="text-center">
      <h2 className="mb-4 text-3xl font-bold">{name}</h2>
      <p className="mb-4 text-lg">
        Por favor, escribe el codigo de seguridad para comprobar que quieres
        eliminar
      </p>
      {error && <p>Error: hubo un error jajaja.</p>}
      {loading && <p>Cargando.....</p>}
      <input
        className="px-4 py-2 rounded-md text-black outline-none"
        placeholder="Codigo de seguridad"
      />
      <button
        onClick={() => setLoading(true)}
        className="ml-4 px-4 py-2 bg-cyan-700 rounded-md hover:bg-cyan-800 active:bg-cyan-900"
      >
        Comprobar
      </button>
    </div>
  );
};
export { UseState };
