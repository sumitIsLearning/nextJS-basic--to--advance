"use client"
import { useState } from "react"


export function Button() {
    const [count, setCount] = useState(0);
    // simulation of hydration error
    // const currentTime = Date.now();
    // to solve this you should use useEffect on the client component
    return <div>
        {/* {currentTime} */}
        <button 
            onClick={() => setCount(count => count + 1)}
            className="border border-gray-300 rounded px-6 py-2"
        >
            count {count}
        </button>
    </div>
} 

/* hydration error occurs , when the client component content does not match the server component content on render */

/* server components are those component when are only render on the server 
meaning you will get a full fledge html render from the server. */

/* client components are render on the client , meaning you will only get 
empty html with no content, but its actually not in case of nextjs , client component are pre render from the server but it again render on the client side , thats the reason why hydration error occurs */


/* use cases of client components
- when using hooks
- when using events
- when you want CSR (client side rendering)
 */
/* use cases of server components (default)
- when using async / await in components
- when doing SSR (server side rendering)
 */