import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="sobre este juego"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        este es un juego argentino basado en el código open-source de Wordle -{' '}
        <a
          href="https://github.com/sjaquemate/boludle"
          className="underline font-bold"
        >
          mira el código argentino acá
        </a>{' '}
        -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          y el código original acá
        </a>{' '}
      </p>
    </BaseModal>
  )
}
