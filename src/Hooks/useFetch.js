import React, { useEffect } from 'react'
// import { BASE_URL } from 'config'

const INITIAL_REQUEST = {
  response: null,
  loading: false,
  success: false,
  error: false
}

const useFetch = ({ fullUrl, path }, options) => {
  const [{ response, loading, success, error }, setResponse] = React.useState(
    INITIAL_REQUEST
  )

  useEffect(() => {
    setResponse({ ...INITIAL_REQUEST, loading: true })

    fetch(fullUrl, options)
      .then(res => res.json())
      .then(response =>
        setResponse(state => ({ ...state, response, success: true }))
      )
      .catch(error =>
        setResponse(state => ({ ...state, error, response: error }))
      )
      .finally(() => setResponse(state => ({ ...state, loading: false })))
  }, [fullUrl || path])

  return { response, loading, success, error }
}

export default useFetch
