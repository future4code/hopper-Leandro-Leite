import axios from "axios"
import React from "react"
import './App.css'


import logo from './img/logo.gif'
import apagar from './img/apagar.png'
import add from './img/add.png'
import tocar from './img/play.png'

class App extends React.Component {

  state = {
    playlist: [],
    inputPlaylist: '',
    musicas: [],
    inputMusicas: '',
    inputArtistas: '',
    inputUrl: '',
    idPlaylist: '',
    tocar: false,
    playNaMusica: {}
  }


  componentDidMount() {
    this.renderizarPlaylist()
  }

  
  renderizarPlaylist = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        {
          headers: {
            Authorization: 'leandro-leite-hopper'
          }
        }
      )
      .then(response => {
        this.setState({ playlist: response.data.result.list })
      })
      .catch(err => {
        alert(err.response.data)
      })
  }

  
  criarPlaylist = () => {
    const body = {
      name: this.state.inputPlaylist
    }

    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        body,
        {
          headers: {
            Authorization: 'leandro-leite-hopper'
          }
        }
      )
      .then(() => {
        this.setState({ inputPlaylist: '' })
        this.renderizarPlaylist()
      })
      .catch(err => {
        console.log(err.response.data)
      })
  }


  onChangePlaylist = event => {
    this.setState({ inputPlaylist: event.target.value })
  }

  
  criaIdPlaylist = id => {
    this.setState({
      criarMusicas: !this.state.criarMusicas,
      idPlaylist: id
    })
  }
  
  criarMusicas = () => {
    const body = {
      name: this.state.inputMusicas,
      artist: this.state.inputArtistas,
      url: this.state.inputUrl
    }

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks`,
        body,
        {
          headers: {
            Authorization: 'leandro-leite-hopper'
          }
        }
      )
      .then(() => {
        this.setState({ inputMusicas: '', inputArtistas: '', inputUrl: '' })
        alert('Música adicionada com sucesso!')
        this.selecionaPlaylist(this.state.idPlaylist)
      })
      .catch(err => {
        console.log(err.response.data)
        alert('Ops, Erro ao adicionar a Música!')
      })
  }

    selecionaPlaylist = id => {
      axios
        .get(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
          {
            headers: {
              Authorization: 'leandro-leite-hopper'
            }
          }
        )
        .then(response => {
          this.setState({ musicas: response.data.result.tracks, idPlaylist: id })
        })
        .catch(err => {
          alert(err.response.data)
        })
    }
  
   
    onChangeMusicas = event => {
      this.setState({ inputMusicas: event.target.value })
    }
  
   
    onChangeArtistas = event => {
      this.setState({ inputArtistas: event.target.value })
    }
  
    
    onChangeUrl = event => {
      this.setState({ inputUrl: event.target.value })
    }
  
 
    deletaPlaylist = id => {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          {
            headers: {
              Authorization: 'leandro-leite-hopper'
            }
          }
        )
        .then(response => {
          alert('Playlist excluída com sucesso!')
          this.renderizarPlaylist()
        })
        .catch(error => {
          console.log(error)
          alert('Ops, aconteceu um erro ao excluir a Playlist!')
        })
    }
  

    tocarMusicas = musica => {
      this.setState({
        playNaMusica: musica,
        tocar: !this.state.tocar
      })
    }
  

    deletaMusicas = id => {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks/${id}`,
          {
            headers: {
              Authorization: 'leandro-leite-hopper'
            }
          }
        )
        .then(() => {
          this.selecionaPlaylist(this.state.idPlaylist)
          alert('Música excluída com sucesso!')
        })
        .catch(error => {
          alert('Ops, aconteceu um erro ao excluir Música!')
        })
    }
  
    render() {
      return (
        <body>
          <header className="header">
            <div className="logo">
              <img className="logo-gif" src={logo} alt="Logotipo do Labefy" />
              <h3 className="h3-gradiente">Labefy</h3>
            </div>
            <div className="texto-header">
              <p className="p-gradiente">Revolucionando a forma que você ouve música!</p>
            </div>
          </header>
          <main className="main">
            <div>
              <div className="criar-playlist">
                <p className="p-gradiente">Crie sua Playlist</p>
                <div>
                  <input
                    className="inputPlaylist"
                    placeholder="Insira o nome da playlist"
                    value={this.state.inputPlaylist}
                    onChange={this.onChangePlaylist}
                    type="text"
                  />
                  <button className="buttonPlaylist" onClick={this.criarPlaylist}>
                    Criar Playlist
                  </button>
                </div>
              </div>
              {/* {this.state.criarMusicas && ( */}
              <div className="criar-musicas">
                <p className="p-gradiente">Adicione suas músicas</p>
                <div>
                  <input
                    className="inputsMusicas"
                    placeholder="Insira o nome da Música"
                    value={this.state.inputMusicas}
                    onChange={this.onChangeMusicas}
                    type="text"
                  />
                  <input
                    className="inputsMusicas"
                    placeholder="Insira o nome do Artista"
                    value={this.state.inputArtistas}
                    onChange={this.onChangeArtistas}
                    type="text"
                  />
                  <input
                    className="inputsMusicas"
                    placeholder="Insira a url da Música"
                    value={this.state.inputUrl}
                    onChange={this.onChangeUrl}
                    type="url"
                  />
                </div>
                <button
                  className="buttonAdicionarMusicas"
                  onClick={this.criarMusicas}
                >
                  Adicionar Músicas
                </button>
              </div>
              {/* )} */}
              {this.state.tocar && (
                <div className="tocar-musica">
                  <div>
                    <p className="p-gradiente">Tocando Música</p>
                    <div className="tocando">
                      <h4>{this.state.playNaMusica.name}</h4>
                      <h4>{this.state.playNaMusica.artist}</h4>
                    </div>
                  </div>
                  <div>
                    <audio controls autoPlay>
                      <source src={this.state.playNaMusica.url}></source>
                    </audio>
                  </div>
                </div>
              )}
            </div>
            <div className="playlists-criadas">
              <p className="p-gradiente">Suas Playlists</p>
              <div>
                {this.state.playlist.map(play => {
                  return (
                    <div className="playlist-nomes" key={play.id}>
                      <h3 onClick={() => this.selecionaPlaylist(play.id)}>
                        {play.name}
                      </h3>
                      <div>
                        <img
                          src={add}
                          width="25vh"
                          onClick={() => this.criaIdPlaylist(play.id)}
                        />
                        <img
                          src={apagar}
                          width="25vh"
                          onClick={() => this.deletaPlaylist(play.id)}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="musicas-criadas">
              <p className="p-gradiente">Suas Músicas</p>
              <div>
                {this.state.musicas.map(musica => {
                  return (
                    <div className="playlist-musicas" key={musica.id}>
                      <div>
                        <h4>
                          {musica.name} - {musica.artist}
                        </h4>
                      </div>
                      <div>
                        <img
                          src={tocar}
                          width="25vh"
                          onClick={() => this.tocarMusicas(musica)}
                        />
                        <img
                          src={apagar}
                          width="25vh"
                          onClick={() => this.deletaMusicas(musica.id)}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </main>
          
        </body>
      )
    }
  }
  
  export default App
