import { useEffect } from "react";
import useCustomizer from "../hook/useCustomizer";

const Loading = () => {

  const {
    applyStyles,
  } = useCustomizer();

  useEffect(() => {
    applyStyles();
  }, [applyStyles])

  return (
    <aside className='loading'>
      <h3>Loading...</h3>
    </aside>
  )
}

export default Loading
