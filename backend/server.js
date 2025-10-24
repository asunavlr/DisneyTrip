import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const PACOTES = [
  {
    id: 1,
    nome: 'Casa + Carro Premium',
    descricao: 'Casa completa com piscina e carro SUV automático.',
    preco: 8900,
    imagem: 'https://picsum.photos/800/400?random=1',
  },
  {
    id: 2,
    nome: 'Casa + Ingresso',
    descricao: 'Casa confortável com ingressos para 3 parques.',
    preco: 7600,
    imagem: 'https://picsum.photos/800/400?random=2',
  },
  {
    id: 3,
    nome: 'Casa Econômica',
    descricao: 'Casa para até 4 pessoas, próxima aos parques.',
    preco: 5200,
    imagem: 'https://picsum.photos/800/400?random=3',
  },
]

app.get('/api/pacotes', (req, res) => {
  res.json(PACOTES)
})

app.get('/api/pacote/:id', (req, res) => {
  const pacote = PACOTES.find((p) => String(p.id) === req.params.id)
  if (!pacote) return res.status(404).json({ message: 'Pacote não encontrado' })
  res.json(pacote)
})

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`API DisneyProject rodando em http://localhost:${port}`))