import React from 'react';
import { db } from '../../firebase';
import { collectIdsAndData } from '../../utilities';

const PropertyProvider = (props) => {
  const [property, setProperty] = useState([]);

  let unsubscribeFromFirestore = null;

  useEffect(() => {
    let mounted = true;
    function getProperty() {
      db.collection("properties").doc(props.id).get().then((doc) => {
        if (doc.exists) {
          const property = collectIdsAndData(doc.data())
        } else {
          console.log("No such document!")
        }
      });
      setProperty(property);
    }

    getProperty();

    return function cleanup() {
      unsubscribeFromFirestore();
      mounted = false;
    };
  }, []);


  // let unsubscribeFromFirestore = null;

  // useEffect(() => {
  //   let mounted = true;
  //   async function getProperty() {
  //     unsubscribeFromFirestore = await db
  //       .collection("properties")
  //       .doc(props.id)
  //       .onSnapshot((snapshot) => {
  //         const properties = snapshot.docs.map(collectIdsAndData);
  //         if (mounted) setProperties(properties);
  //       });
  //   }
  //   getProperty();

  //   return function cleanup() {
  //     unsubscribeFromFirestore();
  //     mounted = false;
  //   };
  // }, []);
}

export default PropertyProvider;