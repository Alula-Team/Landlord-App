import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collectIdsAndData } from "../utilities";

const useDoc = (coll, id) => {
  const [doc, setDoc] = useState();

  let unsubscribeFromFirestore = null;

  useEffect(() => {
    let mounted = true;
    async function getDoc() {
      unsubscribeFromFirestore = await db.collection(coll).doc(id).onSnapshot((snapshot) => {
        const oneDoc = collectIdsAndData(snapshot.data);
        if (mounted) setDoc(oneDoc);
      });
    }
    getDoc();
    return function cleanup() {
      unsubscribeFromFirestore();
      mounted = false;
    }
  }, []);
}

export default useDoc;