import UserCard from './UserCard';
export default function FollowerCards({data}) {
    console.log(data, 'follwerprops')
    return (
        <div>
            {data.map(follower => {
                return <UserCard key={follower.id} data={follower}/>
            })}
        </div>

    )
}