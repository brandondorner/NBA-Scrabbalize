import {
  Center,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner
} from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

type Props = {
  header?: string
  isLoading?: boolean
  isOpen: boolean
  onClose: () => void
} & PropsWithChildren

const Modal = ({ children, header, isLoading, isOpen, onClose }: Props) => {
  return (
    <ChakraModal isCentered isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent h={'auto'} pb={4}>
        {isLoading ? (
          <Center h="100%">
            <Spinner />
          </Center>
        ) : (
          <>
            <ModalHeader textAlign={'center'}>{header}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{children}</ModalBody>
          </>
        )}
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
