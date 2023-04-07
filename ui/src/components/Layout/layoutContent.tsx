import AssignmentIcon from '@mui/icons-material/Assignment'
import ImageIcon from '@mui/icons-material/Image'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import AddchartIcon from '@mui/icons-material/Addchart'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'

const content = [
  {
    title: 'Txt2img',
    icon: <AssignmentIcon />,
    link: '/',
  },
  {
    title: 'Img2img',
    icon: <ImageIcon />,
    link: '/img2img',
  },
  {
    title: 'Extras',
    icon: <AddPhotoAlternateIcon />,
    link: '/extras',
  },
  {
    title: 'PngInfo',
    icon: <AddchartIcon />,
    link: '/pnginfo',
  },
  {
    title: 'Settings',
    icon: <SettingsApplicationsIcon />,
    link: '/settings',
  },
]

export default content
