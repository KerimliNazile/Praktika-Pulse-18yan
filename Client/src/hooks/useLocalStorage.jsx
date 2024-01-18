import React, { useEffect, useState } from 'react'

const useLocalStorage = (key) => {
    const [local, setLocal] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : '')
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(local))
    }, [local])

    function handleLogal(data) {
        setLocal(data)
    }
    return [local, handleLogal]
}

export default useLocalStorage
