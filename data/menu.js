const menu = [
  {
    title: 'Início',
    icon: 'mdi-home',
    to: '/dashboard',
  },
  {
    title: 'Atendimento',
    icon: 'mdi-forum',
    to: '/atendimento',
    role: 'user',
  },
  {
    title: 'Meu cronograma',
    icon: 'mdi-calendar',
    to: '/cronograma',
    role: 'user',
  },
  {
    title: 'Conteúdo exclusivo',
    icon: 'mdi-post',
    to: '/conteudo-exclusivo',
  },
  {
    title: 'Suporte',
    icon: 'mdi-forum',
    to: '/suporte',
    role: 'admin',
  },
  {
    title: 'Clientes',
    description: 'Lista de clientes',
    icon: 'mdi-account-group-outline',
    to: '/clientes',
    role: 'admin',
  },
]

export default menu
