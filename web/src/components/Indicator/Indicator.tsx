import Icon from '../Icon/Icon'

interface IndicatorProps {
  status: 'success' | 'warning' | 'error'
}

const Indicator = ({ status }: IndicatorProps) => {
  return (
    <>
      {status === 'success' && (
        <div className="center indicator bg-spanishGreen text-white border-white">
          <Icon id="check" size={16} />
        </div>
      )}
      {status === 'error' && (
        <div className="center indicator bg-orangeRed text-white border-white">
          <Icon id="minus" size={16} />
        </div>
      )}
      {status === 'warning' && (
        <div className="center indicator bg-supernova text-black border-white">
          <Icon id="question" size={16} />
        </div>
      )}
    </>
  )
}

export default Indicator
