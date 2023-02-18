import { React, useState, useEffect }  from 'react';
import { Link, useParams } from 'react-router-dom'
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faHeart } from '@fortawesome/free-solid-svg-icons'
import {Container, Col, Row, Form, Button, FloatingLabel} from 'react-bootstrap';

// Creates forums page
export function Forums(props) {
    const [postsState, setPosts] = useState({});

    // get the posts
    useEffect(() => {
        const db = getDatabase();
        const forumPostRef = ref(db, "forum_posts/");
        onValue(forumPostRef, (snapshot) => {
            if (snapshot.exists()) {
                setPosts(snapshot.val());
            } else {
              console.log("No data available");
            }
          });
    }, []);

    const currPosts = postsState;
    const currPostKeys = Object.keys(currPosts);
    const currPostArray = currPostKeys.map((key) => {
        const singlePostCopy = {...currPosts[key]}
        singlePostCopy.key = key;
        return singlePostCopy;
    });

    let postElem = currPostArray.map(currPost => {
        return <ForumPost post={currPost} key={currPost.id} />
    });

    let forumOptionElem = props.forums.map(currForum => {
        return <ForumOption forum={currForum} key={currForum.name} />
    });

    return (
        <div className="forums-page">
            <div className="forum-container">
                <div className="forum-header">
                    <h2>Recent posts</h2>
                    <Link to="../forums/newpost"><input type="button" value="New Post" /></Link>
                </div>
                {postElem}
            </div>
            <div className="board-container">
                <h2>All Boards</h2>
                {forumOptionElem}
            </div>
        </div>
    );
}

// populates a forum post
export function ForumPost(props) {
    let post = props.post;
    let commentCount;

    // handle comment count
    if(post.comments === undefined) {
        commentCount = 0;
    } else {
        commentCount = Object.keys(post.comments).length;
    }

    return (
        <Link to={"/forums/post/" + post.key} className="forum-option">
            <div className="forum-title">
                <h3>{post.title}</h3>
                <p>Posted in {post.genre}</p>
            </div>
            <div className="forum-user">
                <img className="post-pfp" src={"img/userimage.png"} alt={post.user} />
                <h3>Posted by:</h3>
                <p>{post.user}</p>
            </div>
            <div className="mobile-foruminfo">
            <div className="comments-and-likes">
                <div className="forum-commentcount">
                    <FontAwesomeIcon className="comment-button" alt="comment button" icon={faComments} />
                    <p>{commentCount}</p>
                </div>
                <div className="forum-likecount">
                    <FontAwesomeIcon className="like-button" alt="like button" icon={faHeart} />
                    <p>{post.likes}</p>
                </div>
            </div>
            <div className="forum-postdate">
                <h3>Posted: {post.post_date}</h3>
            </div>
        </div>
        </Link>
    );
}

// populates a sub forum options
function ForumOption(props) {
    const option = props.forum;
    const [filteredOptions, setOptions] = useState({});
    const currGenre = option.name;

    // get the posts by genre for thread count
    useEffect(() => {
        const db = getDatabase();
        const dbRef = ref(db, "forum_posts/");
        onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                setOptions(snapshot.val());
            } else {
            console.log("No data available");
            }
        });
    }, []);

    const currOptions = filteredOptions;
    const currOptionKeys = Object.keys(currOptions);
    const currPostArray = currOptionKeys.map((key) => {
        const singleOptionCopy = {...currOptions[key]}
        singleOptionCopy.key = key;
        return singleOptionCopy;
    });

    // use filter() to filter posts by given genre, then get length of each post thread
    const filteredThreadCount = currPostArray.filter(post => post.genre === currGenre).length;

    return (
        <Link to={"/forums/" + option.name} className="board-option">
            <div className="board-info">
                <h3>{option.name}</h3>
                <h4>{option.flavor_text}</h4>
            </div>
            <div className="mobile-boardinfo">
                <div className="board-threadcount">
                    <h3>Threads:</h3>
                    <p>{filteredThreadCount}</p>
                </div>
            </div>
        </Link>
    );
}

export function NewPost(props) {
    const [currUser, setUser] = useState();
    const [postError, setPostError] = useState(null);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
    });

    let genreElem = props.genres.map(currGenre => {
        console.log(currGenre.name);
        return <option value={currGenre.name}>{currGenre.name}</option>
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        let user = "";
        if (currUser) {
            user = currUser.displayName;
            const title = event.target.title.value;
            const genre = event.target.genre.value;
            const content = event.target.content.value;
            // get current date, thanks Varun Natraaj on stack overflow
            const date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            const db = getDatabase();

            set(push(ref(db, "forum_posts")), {
                user: user,
                post_date: date,
                likes: 0,
                title: title,
                genre: genre,
                content: content
            });
        } else {
            const errorMessage = "Cannot make post! User is not logged in."
            console.log("something went wrong with user");
            setPostError(errorMessage);
        }
    }

    return (
        <div className="forums-form">
        <Container className="mt-9">
        <Row>
        <h2>Create an Forum Post Below!</h2>
        <Form onSubmit={handleSubmit}>
            <Col xs="auto"> 
            <Form.Group controlId="titleInput">
            <FloatingLabel controlId="floatingInput"
            label="Post Title"
            className="mb-3">
            <Form.Control type="postTitle" placeholder="Enter Post Title" className="post-title" name="title" />
            </FloatingLabel>
            </Form.Group>
            </Col>

            <Col xs="auto">
            <Form.Group controlId="genreInput" className="mb-3">
            <FloatingLabel controlId="floatingSelect" label="Genre">
            <Form.Select aria-label="Floating label" name="genre" id="genre">
            {genreElem}
            </Form.Select>
            </FloatingLabel>
            </Form.Group>
            </Col>

            <Col xs="auto">
            <Form.Group controlId="contentInput" className="mb-3">
            <FloatingLabel controlId="floatingSelect" label="Forum Description">
            <Form.Control
            as="textarea"
            placeholder="Write your description here"
            style={{ height: '100px' }}
            name="content"
            className="post-content"
            />
            </FloatingLabel>
            </Form.Group>
            </Col>
            <Button variant="primary btn-block" value="Post" type="submit" className="login-button mt-2">
                Post Forum (Only Click Once!)
            </Button>
            <ErrorHandler error={postError} />
        </Form>
        </Row>
        </Container>
        </div>
    )
}

export function ShowPost(props) {

    const [currPost, setPost] = useState({});
    const post_id = useParams().postID;

    // get the post
    useEffect(() => {
        const db = getDatabase();
        const forumPostRef = ref(db, "forum_posts/" + post_id + "/");
        onValue(forumPostRef, (snapshot) => {
            if (snapshot.exists()) {
                setPost(snapshot.val());
            } else {
            console.log("No data available");
            }
        });
    }, [post_id]);

    return (
        <div className="post-container">
            <div className="post-header">
                <div>
                    <h2>{currPost.title}</h2>
                    <h3>Posted in {currPost.genre}</h3>
                </div>
            </div>
            <div className="post-content">
                <div className="post-info">
                    <h3>Posted on: {currPost.post_date}</h3>
                    <h3>Posted by: {currPost.user}</h3>
                </div>
                <p>{currPost.content}</p>
                <div className="post-likes">
                    <FontAwesomeIcon className="like-button" alt="like button" icon={faHeart} />
                    <p>{currPost.likes} likes</p>
                </div>
            </div>
            <div className="comment-container">
                <h2>Comments:</h2>
                <NewComment />
                <ShowComments comments={currPost.comments}/>
            </div>
        </div>
    );
}

export function FilterGenre(props) {
    const [filteredPosts, setPosts] = useState({});

    const urlParams = useParams();
    const currGenre = urlParams.genre;

    // get the posts
    useEffect(() => {
        const db = getDatabase();
        const dbRef = ref(db, "forum_posts/");
        onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                setPosts(snapshot.val());
            } else {
            console.log("No data available");
            }
        });
    }, [])

    const currPosts = filteredPosts;
    const currPostKeys = Object.keys(currPosts);
    const currPostArray = currPostKeys.map((key) => {
        const singlePostCopy = {...currPosts[key]}
        singlePostCopy.key = key;
        return singlePostCopy;
    });

    // use filter() to filter posts by given genre
    const currPostFiltered = currPostArray.filter(post => post.genre === currGenre);

    let postElem = currPostFiltered.map(currPost => {
        return <ForumPost post={currPost} key={currPost.id} />
    });

    return (
        <div>
            <h2>{currGenre}</h2>
            {postElem}
        </div>
    );
};

function ShowComments(props) {
    if(props.comments === undefined) {
        return (<h3>No comments.</h3>);
    }

    const currCommentsKeys = Object.keys(props.comments);
    const currCommentsArray = currCommentsKeys.map((key) => {
        const singleCommentCopy = {...props.comments[key]}
        singleCommentCopy.key = key;
        return singleCommentCopy;
    });

    let currCommentsElem = currCommentsArray.map(currComment => {
        return <Comment comment={currComment}/>
    });

    return (
        <div className="comment-container">
            <h3>{currCommentsArray.length} comments:</h3>
            {currCommentsElem}
        </div>
    );
}

function Comment(props) {
    const content = props.comment.content;
    const user = props.comment.user;
    const date = props.comment.post_date;

    return (
        <div className="comment">
            <div className="comment-info">
                <h3>Posted by: {user}</h3>
                <h3>Posted on: {date}</h3>
            </div>
            <p>{content}</p>
        </div>
    );
}

function NewComment(props) {
    const [currUser, setUser] = useState();
    const [commentError, setCommentError] = useState(null);
    const urlParams = useParams();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            return;
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        let user = "";
        if (currUser) {
            user = currUser.displayName;

            const content = event.target.comment.value;
            // get current date, thanks Varun Natraaj on stack overflow
            const date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            const db = getDatabase();

            set(push(ref(db, "forum_posts/" + urlParams.postID + "/comments/")), {
                user: user,
                post_date: date,
                content: content
            });
        } else {
            const errorMessage = "Cannot leave comment! User is not logged in!"
            console.log("something went wrong with user");
            setCommentError(errorMessage);
            return;
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Comment:
                <textarea className="comment" name="comment" />
            </label>
            <input type="submit" value="Post" />
            <ErrorHandler error={commentError}/>
        </form>
    )
}

function ErrorHandler(props) {
    if(props.error === undefined) {
        return null;
    } else {
        return (
            <h2>{props.error}</h2>
        );
    }
}