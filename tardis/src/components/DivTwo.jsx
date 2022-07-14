import DivThree from "./DivThree"

const DivTwo = ( { changeCase, tardis } ) => {
    return (
        <div> 
            <DivThree changeCase={ changeCase } tardis={ tardis } />
            <DivThree changeCase={ changeCase } tardis={ tardis } />
        </div>
    )
}

export default DivTwo