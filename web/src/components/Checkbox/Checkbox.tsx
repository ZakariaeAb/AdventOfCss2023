import { CheckboxField, Label } from '@redwoodjs/forms'

const Checkbox = ({ label, name, ...rest }) => {
  return (
    <div className="checkbox-field">
      <CheckboxField name={name} {...rest} />
      <Label name={name}>{label}</Label>
    </div>
  )
}

export default Checkbox
