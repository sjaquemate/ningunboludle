import { ChartBarIcon, InformationCircleIcon } from '@heroicons/react/outline'
import ImgMate from '../../assets/mate.png'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({ setIsInfoModalOpen, setIsStatsModalOpen }: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-banner px-5 py-2 bg-amber-200">
        <div className="text-sm mx-5 text-center">
          <span className="italic">Que todos los chicos en Argentina puedan leer{' '}</span>
          <span>🤍{' '}</span>
          <span className="italic">Ayudá donando</span>
          <span>{' '}</span>
          <a className="underline italic font-bold" href="https://www.leer.org/donar">
            leer.org/donar
          </a>
        </div>
      </div>
      <div className="navbar-content px-5">
        <InformationCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"
          onClick={() => setIsInfoModalOpen(true)}
        />

        <div className="flex">
          <p className="text-xl font-bold dark:text-white">boludle</p>
          <img
            className="h-6 w-6 ml-1 cursor-pointer dark:stroke-white"
            src={ImgMate}
            alt=""
          />
        </div>
        <div className="right-icons">
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          {/* <CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          /> */}
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
