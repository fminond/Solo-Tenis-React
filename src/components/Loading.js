import ClipLoader from "react-spinners/ClipLoader";
export const Loading = () => {
 
  return (
    <div className="sweet-loading">

      <ClipLoader
        color="#000000"
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        width={100}
        height={4}
      />
    </div>
  );
}




