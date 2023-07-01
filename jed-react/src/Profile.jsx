function Profile(props){
    return <>
     <h1>Name : {props.firstname+" " + props.lastname}</h1>
     <p>Age : {props.age}</p>
     <p>City : {props.city}</p>
    </>

}

export default Profile;