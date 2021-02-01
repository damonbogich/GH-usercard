import { createPortal } from "react-dom"

export default function UserCard({data}) {
    if (data.name) {
        return (
            <div style={{borderStyle: "solid", borderColor: "black"}}>
                <h1>My Card</h1>
                <h2>{data.name}</h2>
                <img src={data.avatar_url}/>
                <h3>Github UserName: {data.login}</h3>
            </div>
        );
    }
    else {
        return (
            <div style={{borderStyle: "solid", borderColor: "black"}}>
                <h1>Follower Card</h1>
                <img src={data.avatar_url}/>
                <h3>Github UserName: {data.login}</h3>
            </div>
        )
    }
    
};