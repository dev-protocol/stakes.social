import { useState, useEffect } from 'react'
const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url)
        const result = await response.json()
        if (response.ok) {
          setData(result)
        } else {
          setHasError(true)
          setErrorMessage(result)
        }
        setIsLoading(false)
      } catch (err) {
        setHasError(true)
        setErrorMessage(err.message)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, isLoading, hasError, errorMessage }
}
export default useFetch
