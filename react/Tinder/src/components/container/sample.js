import { memo } from "react"

const SampleComponent = ()=>{
    console.log('I am Sample')
    return (
        <h2>Sample Componet</h2>
    )
}
export default memo(SampleComponent)