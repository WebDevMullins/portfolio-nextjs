import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader
} from '@nextui-org/react'
import PropTypes from 'prop-types'

const FormModal = ({
	isOpen,
	onClose,
	data
}: {
	isOpen: boolean
	onClose: () => void
	data: any
}) => {
	return (
		<>
			{/* Modal component from NextUI for displaying a modal dialog */}
			<Modal
				backdrop='blur'
				isOpen={isOpen}
				onClose={onClose}
				radius='lg'
				classNames={{
					base: 'border-neutral-700 bg-neutral-950 text-neutral-300',
					header: 'border-b-1 border-neutral-800',
					footer: 'border-t-1 border-neutral-800',
					closeButton: 'hover:bg-white/5 active:bg-white/10'
				}}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>
								Success!
							</ModalHeader>
							<ModalBody>
								<p className='font-semibold text-red-700'>
									This feature is currently in under development.
								</p>
								<p className='font-semibold text-red-700'>
									Nothing will be sent.
								</p>
								<p className='font-semibold text-red-700'>
									Please contact by email or phone.
								</p>
								<p>Thank you, {data && data.name}!</p>
								<p>
									Email - <br /> {data && data.email}
								</p>
								<p>
									Message - <br /> {data && data.message}
								</p>
							</ModalBody>
							<ModalFooter>
								<Button
									className='bg-red-700'
									onPress={onClose}>
									Close
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

export default FormModal
