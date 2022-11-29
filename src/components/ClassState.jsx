import { Component } from "react";
import { Loading } from "./Loading";

const CODIGO = "paradigma";

class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      value: "",
    };
  }

  componentDidUpdate() {
    console.log("efecto...");
    if (!!this.state.loading) {
      console.log("validando...");
      setTimeout(() => {
        
        if(this.state.value !== CODIGO){
            this.setState({error: true})
        }else{
            this.setState({error: false})
        }
        this.setState({ loading: false, value: "" });
      }, 3000);
    }
  }

  render() {
    const { name } = this.props;
    const { error, loading, value } = this.state;
    return (
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold">{name}</h2>
        <p className="mb-4 text-lg">
          Por favor, escribe el codigo de seguridad para comprobar que quieres
          eliminar
        </p>
        {error && !loading && <p>Error: clave incorrecta</p>}
        {loading && <Loading />}
        <input
          className="px-4 py-2 rounded-md text-black outline-none"
          placeholder="Codigo de seguridad"
          value={value}
          onChange={(e) => this.setState({value: e.target.value})}
        />
        <button
          onClick={() => this.setState({ loading: true })}
          className="ml-4 px-4 py-2 bg-teal-700 rounded-md hover:bg-teal-800 active:bg-teal-900"
        >
          Comprobar
        </button>
      </div>
    );
  }
}
export { ClassState };
