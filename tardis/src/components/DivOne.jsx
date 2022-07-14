import DivTwo from './DivTwo'

const DivOne = ({ changeCase, tardis }) => {
    return (
        <div> 
            <DivTwo changeCase={ changeCase } tardis={ tardis }/>
        </div>
    )
}

export default DivOne