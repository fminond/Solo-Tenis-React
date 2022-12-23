import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, doc, getDocs,where,getDoc, getFirestore,query,
} from "firebase/firestore";

export const useGetItem = () => {
  const [data, setData] = useState(null);
  const { category, id } = useParams();

  const db = getFirestore();
  const refProps = [db, "items"];
  const ref = id ? doc(...refProps, id) : collection(...refProps);

  useEffect(() => {
    
    if (category) {
      const refQuery = query(ref, where("category", "==", category));
      getDocs(refQuery).then((result) =>
        setData(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );

      return;
    }

    if (id) {
      getDoc(ref)
        .then((item) => {
          if (item.exists()) {
            setData({ id: item.id, ...item.data() });
          }
        })
        .catch((err) => console.error({ err }));
      return;
    }
    getDocs(ref).then((result) =>
      setData(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );
  }, []);

  return data;
};