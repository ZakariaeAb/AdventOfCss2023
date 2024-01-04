import { useState } from 'react'
import Icon from '../Icon/Icon'
import { Label, PasswordField, TextField } from '@redwoodjs/forms'

const ShowHidePassword = ({ label, name, ...rest }) => {
  const [isPasswordShowing, setisPasswordShowing] = useState(false)

  const handleClick = () => {
    setisPasswordShowing((prevValue) => !prevValue)
  }

  return (
    <div className="relative">
      <Label name={name}>{label}</Label>
      {isPasswordShowing ? (
        <TextField name={name} placeholder="" {...rest} />
      ) : (
        <PasswordField
          name={name}
          placeholder=""
          {...rest}
        />
      )}
      <button className="absolute right-6 top-8" onClick={handleClick}>
        {isPasswordShowing ? (
          <Icon id="eyeOpened" size={32} />
        ) : (
          <Icon id="eyeClosed" size={32} />
        )}
      </button>
    </div>
  )
}

export default ShowHidePassword
