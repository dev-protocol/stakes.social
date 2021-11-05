/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

const useDebouncedEffect = (callback: () => any, delay = 250, dependencies?: any[]) =>
  useEffect(() => {
    const timer = setTimeout(callback, delay)

    return () => {
      clearTimeout(timer)
    }
  }, dependencies)

export default useDebouncedEffect
