import React, { useEffect, useState } from 'react'
import "./Profile.css"
import UserPostCard from './UserPostCard'


const Profile_page = () => {
    const server = 'http://localhost:5000/api'
    const image_profile = "https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png"
    const [user_data, set_user_data] = useState()
    const [user_posts, set_user_post] = useState()
    const [show_add_post, set_show_add_post] = useState(false)



    const toggleAddPost = () => {
        set_show_add_post(prevState => !prevState);
    };

    async function userpost() {
        const res = await fetch(`${server}/user-posts`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
            })
        const result = await res.json();
        set_user_post(result.data)


    }
    async function calldata() {
        const res = await fetch(`${server}/profile-page`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
            })
        const result = await res.json();
        set_user_data(result.data)
    }
    useEffect(() => {
        /////////////////////////////user
        calldata()
        userpost()
    }, [])

    // console.log(user_posts);
    ////////////////////////////////////////////////////////without login
    const [Profile_login, set_profile_login] = useState(false);
    let t = localStorage.getItem("token")

    useEffect(() => {
        let t = localStorage.getItem("token");
        if (t) {
            set_profile_login(true);
        } else {
            set_profile_login(false);
        }
    }, []);
    // console.log({t})





    return (
        <>
            {Profile_login ? (
                <>


                    {user_data &&
                        <div className="container">
                            <div className="profile-pic-circular">
                                <img src={image_profile} alt="" />
                            </div>

                            <div className="heading-name">
                                {user_data && user_data.Name}
                            </div>
                            <div className="followers-box">
                                <div className="follower-data-link">
                                    <div className="follower-length">
                                        {user_data.followers.length}
                                    </div>
                                    <div className="follower-all-link">
                                        <button>followers</button>
                                    </div>
                                </div>
                                <div className="follower-data-link">
                                    <div className="follower-length">
                                        {user_data.follows.length}
                                    </div>
                                    <div className="follower-all-link">
                                        <button>follows</button>
                                    </div>
                                </div>
                                <div className="total-posts">
                                    {user_posts && (
                                        <>
                                            Allpost:{user_posts.length}
                                        </>
                                    )}
                                </div>
                            </div>

                            <button onClick={toggleAddPost}>
                                {show_add_post ? (<>cancel</>) : (<>
                                    Add post
                                </>)
                                }

                            </button>


                            {/* < Add_posts/> */}

                            {/* /////////////////////////////user- posts///////////////////////////////////////// */}


                        </div>
                    }
                    {show_add_post && <Add_posts />}


                    <div className="all-post-grid">

                        {user_posts && user_posts.map((user_p, index) => (
                            <>

                                <UserPostCard user_p={user_p} />
                            </>
                        )
                        )

                        }
                    </div>

                </>) : <DefaultPage />}


        </>
    )
}

const Add_posts = () => {
    const server = 'http://localhost:5000/api'

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();


        const res = await fetch(`${server}/user-post`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    title: title,
                    description: description
                })
            })
        const result = await res.json();

        console.log(result.success);
        setTitle('')
        setDescription('')
        window.location.reload();

    }

    return (
        <>
            <div className='container'>
                <h2>Add Post</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

const DefaultPage = () => {
    return (<>
        you must login first
    </>)
}

export default Profile_page