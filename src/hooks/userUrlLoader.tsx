import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UserUrlLoader(url: string, deps: any[] = []) { // 函数名首字母尽量大写，否则容易报错
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(url).then(result => {
            setData(result.data)
            setLoading(false)
        })
    }, deps)

    return [data, loading]
}