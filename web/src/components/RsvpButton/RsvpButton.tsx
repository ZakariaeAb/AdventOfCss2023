import Icon from '../Icon/Icon'

interface propsTypes {
  id: 'thumbsDown' | 'thumbsUp',
  className: String,
  heading: String
}

const RsvpButton = ({ id, className, heading }: propsTypes) => {
  return (
    <button className="relative ml-[72px] h-[115px] max-w-[300px] pr-5 pl-[72px] bg-white text-left text-3xl font-bold leading-none tracking-tight">
      <div
        className={`center absolute -left-[72px] -top-2 h-[132px] w-[132px] rounded-full border-[6px] border-white ${className}`}
      >
        <Icon id={id} size={72} />
      </div>
      { heading }
    </button>
  )
}

export default RsvpButton
