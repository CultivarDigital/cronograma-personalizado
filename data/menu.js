const menu = [
  {
    title: 'Início',
    icon: 'mdi-home',
    to: '/dashboard',
  },
  {
    title: 'Suporte',
    icon: 'mdi-forum',
    to: '/suporte',
    role: 'admin',
  },
  {
    title: 'Atendimento',
    icon: 'mdi-forum',
    to: '/atendimento',
    role: 'user',
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
