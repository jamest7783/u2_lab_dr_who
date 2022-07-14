const DivThree = ( { changeCase, tardis } ) => {
    return (
        <div> 
            <h3 onClick={ changeCase }>
                { tardis.name }
            </h3>
        </div>
    )
}

export default DivThree