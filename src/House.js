import { useParams, Link } from 'react-router-dom'

function House(props) {
    const params = useParams()
    const house = props.houses[params.id-1]
    const members = house.people.map(person=>{
        return (<li><Link to={`/houses/${house.id}/members/${person.id}`}>{person.name}</Link></li>)
    })
    return (
        <div className="page">
            <div className="header">
                <h2>Members of {house.name}</h2>
            </div>
            <ul className="list">
                {members}
            </ul>
        </div>
    );
}

export default House;