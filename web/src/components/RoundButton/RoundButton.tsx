import Icon from '../Icon/Icon'

interface RoundButtonProps {
  status: 'success' | 'warning' | 'error'
}

const RoundButton = ({ status }: RoundButtonProps) => {
  return (
    <button
      className={`rounded-full border-2 border-white p-4 status-${status}`}
    >
      <Icon id="plus" />
    </button>
  )
}

export default RoundButton
