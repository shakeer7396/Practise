// import React, { useEffect, useState } from 'react';

// const ApiFetch = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [page, setPage] = useState(1);

//     useEffect(() => {
//         setLoading(true)
//         fetch(`https://jsonplaceholder.typicode.com/posts?_limit=45&_page=${page}`)
//         .then((res)=> res.json())
//         .then((data)=> {
//             setData(data)
//         setLoading(false);
//         })
//         .catch((err)=> console.log("Error fetching data",err));

//     },[page]);
//   return (
//     <div style={{ marginTop: "40px", padding: "20px", border: "1px solid black", borderRadius: "10px", width: "400px", margin: "auto", backgroundColor: "lightblue", textAlign:"start" }}>
//         <h2 style={{textAlign:"center"}}>API Data Fetch</h2>
//         {loading ? <p>Loading</p> : ( 
//             <ul>
//                 {data.map((item) =>(
//                     <li key={item.id}>{item.title}</li>
//                 ))}
//             </ul>
//         )}
//         <button disable={page===1} onClick={()=> setPage(page-1)}>⬅️ Previous</button>
//         <button onclick={()=> setPage(page + 1)}>Next ➡️</button>

//     </div>
//   )
// }

// export default ApiFetch

import React, { useEffect, useState } from 'react';

const ApiFetch = () => {
  const [allData, setAllData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const pageData = allData.slice(start, end);
    setCurrentData(pageData);
  }, [page, allData]);

  const totalPages = Math.ceil(allData.length / ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div
      style={{
        marginTop: "40px",
        padding: "20px",
        border: "1px solid black",
        borderRadius: "10px",
        width: "400px",
        height: "500px", // Fixed height
        margin: "auto",
        backgroundColor: "lightblue",
        textAlign: "start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h2 style={{ textAlign: "center" }}>API Data Fetch</h2>

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : currentData.length > 0 ? (
          <ul style={{ paddingLeft: "20px" }}>
            {currentData.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        ) : (
          <p style={{ textAlign: "center", color: "red" }}>No pages</p>
        )}
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {currentData.length > 0 && (
          <>
            <div style={{ marginBottom: "10px" }}>Page: {page}</div>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
              <button
                onClick={handlePrev}
                disabled={page === 1}
                style={{
                  padding: "6px 12px",
                  borderRadius: "5px",
                  backgroundColor: "#333",
                  color: "#fff",
                  border: "none",
                  cursor: page === 1 ? "not-allowed" : "pointer",
                  opacity: page === 1 ? 0.5 : 1,
                }}
              >
                ⬅️ Previous
              </button>

              <button
                onClick={handleNext}
                disabled={page === totalPages}
                style={{
                  padding: "6px 12px",
                  borderRadius: "5px",
                  backgroundColor: "#333",
                  color: "#fff",
                  border: "none",
                  cursor: page === totalPages ? "not-allowed" : "pointer",
                  opacity: page === totalPages ? 0.5 : 1,
                }}
              >
                Next ➡️
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ApiFetch;
