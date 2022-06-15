import { useState } from 'react'

const user = () => {

    const [user, setUser] = useState();


    return (
        <div>{user}</div>
    )
}

export default user