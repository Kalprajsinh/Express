import React from "react"

const Hearders = React.memo(
    function Hearders({sername , name , fathername}){
        return(
            <div>
                <h1>Hello , {sername} {name} {fathername}</h1>
            </div>
        )
    }
)



export default Hearders