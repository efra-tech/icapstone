import React from 'react';
import { useForm } from 'react-hook-form';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { storage } from '../base';
import { useState } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";

export default function BulletinPage(props) {
  return (
    <div>
      <h4 className='p-3'>Bulletin Board - Backlog Feature Coming Spring 2023</h4>
      <FileUpload />
      {/* <FormComponent /> */}
    </div>
  );
}

function FileUpload(props) {
  const [uploadedState, setUploadedState] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  }

  const uploadFiles = (file) => {
    if (!file) {
      return;
    }
    const storageRef = ref(storage, `/files/${file.name}`);
    const upload = uploadBytesResumable(storageRef, file);

    upload.on("state_changed", (snapshot) => {},
      (err) => console.log(err),
      () => {
        getDownloadURL(upload.snapshot.ref).then(url => console.log(url));
        const stateMessage = "Uploaded!";
        setUploadedState(stateMessage);
      }
    )
  }

  return (
    <div>
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <button type="submit">Submit</button>
      </form>

      <h3>{uploadedState}</h3>
    </div>
  )

  // const onChange = (e) => {
  //   const file = e.target.files[0]
  //   const storageRef = storage.storage().ref()
  //   const fileRef = storageRef.child(file.name)
  //   fileRef.put(file).then(() => {
  //     console.log("Uploaded a file")
  //   })
  // }

  // return (
  //   <input type="file" onChange={onChange} />
  // );

}



// function FormComponent(props) {
//   return (
//     <div className="container">
//       <Form>
//         <Form.Group className="mb-3" controlId="formTitle">
//           <Form.Label>Title of Post</Form.Label>
//           <Form.Control type="title" placeholder="Enter title" />
//           <Form.Text className="text-muted">
//             This is what everyone will see your post as.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formText">
//           <Form.Label>Post Text</Form.Label>
//           <Form.Control type="text" placeholder="Type text here" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// }