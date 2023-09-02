type personListProps = {
    names :{
        first: string,
        last: string,
        age: number
    } []
}

export const PersonList = (props: personListProps) =>{
    return(
        <div>
            {props.names.map(name => {
                return(
                    <div>
                    <h2> Name Age  </h2>
                   <h3> {name.first} {name.last} {name.age} </h3> 
                   </div>
                )
            })}
        </div>
    )
}