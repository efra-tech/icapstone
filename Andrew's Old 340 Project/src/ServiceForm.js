import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function ServiceForm(props) {
    const [imageFile, setImageFile] = useState(undefined);
    const [imageUrl, setImageUrl] = useState("/img/na.png");
    const [iconChanged, setIconChanged] = useState(false);
    const [serviceName, setServiceName] = useState('');
    const [servicePlan, setServicePlan] = useState('');
    const [servicePrice, setServicePrice] = useState('');
    const [serviceYear, setServiceYear] = useState('');
    const [serviceMonth, setServiceMonth] = useState('');
    const [serviceDate, setServiceDate] = useState('');
    let icon = "/img/na.png";

    const handleSubmit = async (event) => {
        if (iconChanged === true) {
            try {
                await handleImageUpload();
            } catch (err) {
                console.log(err.message);
            }
        }
        props.whatToDoOnSubmit(serviceName, servicePlan, servicePrice, serviceYear, serviceMonth, serviceDate, icon);
    }

    const handleInputName = (event) => {
        setServiceName(event.target.value);
    }

    const handleInputPlan = (event) => {
        setServicePlan(event.target.value);
    }
    const handleInputPrice = (event) => {
        setServicePrice(event.target.value);
    }
    const handleInputYear = (event) => {
        setServiceYear(event.target.value);
    }
    const handleInputMonth = (event) => {
        setServiceMonth(event.target.value);
    }
    const handleInputDate = (event) => {
        setServiceDate(event.target.value);
    }

    const handleChange = (event) => {
        if (event.target.files.length > 0 && event.target.files[0]) {
          const imageFile = event.target.files[0]
          setImageFile(imageFile);
          setImageUrl(URL.createObjectURL(imageFile));
          setIconChanged(true);
        }
    }
    
    const handleImageUpload = async (event) => {
        const storage = getStorage();
        const storageRef = ref(storage, "userImages/" + props.user.user.uid + "/" + serviceName + ".png");
        try {
            await uploadBytes(storageRef, imageFile);
            const url = await getDownloadURL(storageRef);
            icon = url;
        } catch (err) {
        console.log(err.message);
        } finally {
            return icon;
        }
    }

    const validInput =
          serviceName.length > 0 &&
          servicePrice.length > 0;

    return (
        <div>
            <ul className="list-group">
                <div>
                    <li className="list-group-item">
            
                        <div>
                            <div className="row">
                                <div className="col no-gutters padding-0">
                                    Service Name:
                                </div>
                                <div className="col no-gutters padding-0" role="form">
                                    <input type="text" className="form-control" placeholder="Spotify" aria-label="Service name" value={serviceName} onChange={handleInputName}/>
                                </div>
                            </div>
                            {!serviceName.length > 0 &&
                            <p><em>Please fill out Service Name</em></p>
                            }
                        </div>
                    </li>
                    <li className="list-group-item">  
                        <div>
                            <div className="row">
                                <div className="col no-gutters">
                                    Subscription Plan:
                                </div>
                                <div className="col no-gutters" role="form">
                                    <input type="text" className="form-control" placeholder="Default/Family" aria-label="Subscription plan type" value={servicePlan} onChange={handleInputPlan}/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">  
                        <div>
                            <div className="row">
                                <div className="col-4 no-gutters">
                                    Subscription Price ($):
                                </div>
                                <div className="col-4 no-gutters" role="form">
                                    <input type="number" className="form-control" placeholder="10.00" aria-label="Subscription price" value={servicePrice} onChange={handleInputPrice}/>
                                </div>
                            </div>
                            {!servicePrice.length > 0 &&
                            <p><em>Please fill out subscription price</em></p>
                            }
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>  
                            Subscription Date:
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="YYYY" aria-label="Subscription date: Year" value={serviceYear} onChange={handleInputYear}/>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="DD" aria-label="Subscription date: Day" value={serviceMonth} onChange={handleInputMonth}/>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="MM" aria-label="Subscription date: Month" value={serviceDate} onChange={handleInputDate}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="mb-5 image-upload-form">
                            <p>Upload a custom icon:</p>
                            <img src={imageUrl} className="mb-2 formImage" alt="upload here"/>
                            <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
                            <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
                        </div>
                    </li>
                </div>
            </ul>
                {!validInput &&
                <button type="button" className="btn btn-lg btn-primary" aria-label="button to submit new subscription" disabled>
                Submit
                </button>
                }
                {validInput &&
                <Link to="/success">
                    <button type="button" className="btn btn-lg btn-primary" onClick={handleSubmit} aria-label="button to submit new subscription">
                    Submit
                    </button>
                </Link>
                }
        </div>
    )
}