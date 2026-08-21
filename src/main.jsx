//um modo que ajuda a identificar possíveis problemas durante o desenvolvimento, mais oq ele faz pra isso acontecer?
import { StrictMode } from 'react'

//permite que o react encontre um lugar no html pra começar a funcionar (acho que nao entendi quando devemos usar ele?)
import { createRoot } from 'react-dom/client'

import './index.css' //ata esse é o lugar (root)
import App from './App.jsx'
import Game from './components/Game/Game.jsx'
import Square from './components/Square/Square.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Square />
  </StrictMode>,
)