import React from 'react';
import ServiceForm from './ServiceForm';
import {getDatabase, ref, push as firebasePush} from 'firebase/database';

export default function AddASubScription(props) {

    const db = getDatabase();

    // handle image submission
    const addSubscription = (serviceName, servicePlan, servicePrice, serviceYear, serviceMonth, serviceDate, icon) => {
        const newSubscriptionObj = {
            name: serviceName,
            plan: servicePlan,
            price: servicePrice,
            year: serviceYear,
            month: serviceMonth,
            date: serviceDate,
            img: icon,
            userId: props.user.uid,
            time: Date.now()
          }
        const subRef = ref(db, props.user.uid);
        firebasePush(subRef, newSubscriptionObj);
    }

    return (
    <div>
        <main>
            <section>
                <div className="container">
                    <div>
                        <h2>Add a subscription</h2>
                    </div>
                    <ServiceForm whatToDoOnSubmit={addSubscription} user={props}/>
                </div>
            </section>
        </main>
    </div>
    )
}