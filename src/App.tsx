import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import "./App.css";

type Tarefa = {
  id: number,
  titulo: string;
  concluido: boolean;
};

type Publicacao = {
  userId: number,
  id: number;
  titulo: string;
  body: string;
};

type Album = {
  userId: number,
  id: number;
  title: string;
};

type Usuario = {
  id: number,
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((item: { id: number; title: string; completed: boolean; }) => {
        return {
          id: item.id,
          titulo: item.title,
          concluido: item.completed,
        };
      });
      setTarefas(dados);
    });
  };
  
  return (
    <>
      <h4>Tarefas</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar lista de tarefas</button>
      </div>
      <ul>
        {
          tarefas.map((item: Tarefa) => {
            return <ItemTarefa key={item.id} titulo={item.titulo} />
          })
        }
      </ul>
    </>
  );
}

const ItemTarefa = (props: {titulo: string}) => {
  return (<li>{props.titulo}</li>);
}

const ListaDePublicacoes = () => {
  const [publicacoes, setPublicacoes] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((item: { userid: number; id: number; title: string; body: string; }) => {
        return {
          userId: item.userid,
          id: item.id,
          titulo: item.title,
          body: item.body,
        };
      });
      setPublicacoes(dados);
    });
  };
  
  return (
    <>
      <h4>Publicações</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar lista de publicacoes</button>
      </div>
      <div>
        {
          publicacoes.map((item: Publicacao) => {
            return <ItemPublicacao key={item.id} body={item.body} titulo={item.titulo} />
          })
        }
      </div>
    </>
  );
}

const ItemPublicacao = (props: {titulo: string, body: string}) => {
  return (<><h5>{props.titulo}:</h5><p>{props.body}</p></>);
}

const ListaDeUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((item: { id: number; name: string; username: string; email: string; phone: string; website: string; }) => {
        return {
          id: item.id,
          name: item.name,
          username: item.username,
          email: item.email,
          phone: item.phone,
          website: item.website,
        };
      });
      setUsuarios(dados);
    });
  };
  
  return (
    <>
      <h4>Usuários</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar lista de usuarios</button>
      </div>
      <div>
        {
          usuarios.map((item: Usuario) => {
            return <ItemUsuario key={item.id} name={item.name} username={item.username} email={item.email} phone={item.phone} website={item.website}/>
          })
        }
      </div>
    </>
  );
}

const ItemUsuario = (props: {name: string, username: string, email: string, phone: string, website: string}) => {
  return (
    <>
      <h5>{props.username} - ({props.name})</h5>
      <p>email: {props.email}</p>
      <p>phone: {props.phone}</p>
      <a href={props.website}>site: {props.website}</a>
    </>
  );
}

const ListaDeAlbuns = () => {
  const [albuns, setAlbuns] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/albums").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((item: { userId: number; id: number; title: string; }) => {
        return {
          userId: item.userId,
          id: item.id,
          title: item.title,
        };
      });
      setAlbuns(dados);
    });
  };
  
  return (
    <>
      <h4>Albuns</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar lista de albuns</button>
      </div>
      <ul>
        {
          albuns.map((item: Album) => {
            return <ItemAlbum key={item.id} title={item.title} />
          })
        }
      </ul>
    </>
  );
}

const ItemAlbum = (props: {title: string}) => {
  return (<li>{props.title}</li>);
}

const App = () => {
  return (
    <div className="avaliacao">
      <h1>Infoweb - React</h1>
      <ListaDeTarefas />
      <ListaDePublicacoes />
      <ListaDeAlbuns />
      <ListaDeUsuarios />
    </div>
  );
}

export default App;
