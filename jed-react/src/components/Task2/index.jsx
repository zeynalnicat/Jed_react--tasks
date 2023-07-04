import Image from "../Image";
import "./index.css"

const users=[
    {
        id:1, 
        username:"Ali",
        img:'ali',
        job:'developer'
    },
    {
        id:2,
        username:'bedbext_developer',
        img:'bedbext_developer',
        job:'test2',
    },
    {
        id:3,
        username:'duman',
        img:'duman',
        job:'test3',
    },
    {
        id:4,
        username:'js_oyrenen_shexs',
        img:'js_oyrenen_shexs',
        job:'test4',
    },
    {
        id:5,
        username:'qarli_daglar',
        img:'qarli_daglar',
        job:'test5',
    },
    {
        id:6,
        username:'qoca_cinar',
        img:'qoca_cinar',
        job:'test6',
    },
    {
        id:7,
        username:'visselka',
        img:'visselka',
        job:'test7',
    },
    {
        id:8,
        username:'novxani',
        img:'novxani',
        job:'test8',
    },
]

function Task2() {
    return (
      <div className="container">
        {
        users.map((user) => (
          <div key={user.id} className="user-container">
            <Image source={user.img}></Image>
            <div className="user-about">

            <h1>{user.username}</h1>
            <p>{user.job}</p>
            </div>
          </div>
        ))
        }
      </div>
    );
  }

export default Task2