import { memo, useEffect, useRef } from "react"


const Word = (props) => {
  const rerender = useRef(0);
  useEffect(() => {
    rerender.current = rerender.current + 1;
  })

  const { text, active, correct } = props

  if (correct === true) {
    return <span className="correct">{text} </span>

  }
  if (correct === false) {
    return <span className="incorrect">{text} </span>
  }
  if (active) {
    return <span className="active">{text} </span>
  }

  return <span>{text} </span>
}

export default memo(Word);
