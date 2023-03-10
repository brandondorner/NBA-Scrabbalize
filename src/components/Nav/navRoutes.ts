import GithubIcon from 'assets/images/github.svg'
import LinkedinIcon from 'assets/images/linkedin.svg'

const navRoutes = [
  {
    label: 'Players',
    routes: [
      {
        to: '/',
        title: 'Player Rankings'
      }
    ]
  },
  {
    label: 'Teams',
    routes: [{ to: '/teams', title: 'Team Rankings' }]
  },
  {
    label: 'Contact',
    routes: [
      {
        icon: GithubIcon,
        to: 'https://github.com/brandondorner',
        title: 'Github'
      },
      {
        icon: LinkedinIcon,
        to: 'https://www.linkedin.com/in/brandondorner/',
        title: 'LinkedIn'
      }
    ]
  }
]
export default navRoutes
