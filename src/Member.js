import { useParams } from 'react-router-dom'

function Member(props) {
    const params = useParams()
    const house = props.houses[params.houseId-1]

    const memberArr = house.people.filter(person=>{
        if(person.id.toString()===params.memberId) return true
        else return false
    })

    const member = memberArr[0]

    return (
        <div className="page">
            <div className="header">
                <h2>{member.name}</h2>
            </div>
            <div className="desc">
                {member.description}
            </div>
        </div>
    )
}

export default Member;