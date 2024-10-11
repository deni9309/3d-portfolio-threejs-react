import { cn } from '../lib/utils'

const Button = ({ name, isBeam = false, containerClasses }) => {
  return (
    <button className={cn('btn', containerClasses)}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </button>
  )
}

export default Button
