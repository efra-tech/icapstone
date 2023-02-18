import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import CostEfficientGraph from './CostEfficientGraph';
import {getDatabase, ref, onValue} from 'firebase/database';
import DataTable from './DataTable';

export default function Dashboard(props) {
  const [database, setDatabase] = useState(props.subscription);

  useEffect(() => {
    const db = getDatabase();
    const currUserId = props.user.uid;
    const subRef = ref(db, currUserId);

    const offFunction = onValue(subRef, (snapshot) => {
       const allSub = snapshot.val();
       if(allSub === null) {
          setDatabase(null);
          return true;
       }
      const objKeys = Object.keys(allSub); 
      const valueArray = objKeys.map((key) => {
        if(allSub[key].userId === currUserId) {
          const valueAtKeyCopy = { ...allSub[key], firebaseKey: key}; 
          return valueAtKeyCopy;
        }
        return true;
      });
      setDatabase(valueArray);
    })
    const cleanup = () => {
      offFunction();
    }
    return cleanup;
  }, [props.user.uid]);

    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">

                        <section>
                            <h2>{props.user.displayName}'s Subscriptions</h2>
                            <div className="card">
                                <Link to="/addsubscription" className="btn btn-primary float-right add-sub-btn" role="button" aria-label="submit new subscription">Add a Subscription</Link>
                                <div className="card-body">
                                <DataTable data={database}></DataTable>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="row graph">
                        <div className="col-lg-12">
                            <section>

                                <h2>Cost Efficiency for Current Month</h2>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="goal"><em>Goal: </em> Can you make it under $1/hour for your subscriptions?</p>
                                        <CostEfficientGraph data={database}/>          
                                    </div>
                                </div>
                
                            </section>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}