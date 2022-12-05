import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/citys/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cdn-aclbo.nitrocdn.com/TpUtyrbOTeQWObSqrNjUGbhMzGDEmBKv/assets/static/optimized/rev-9a4464f/wp-content/uploads/2017/09/What-is-a-Maid-e1554929563584.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>All-Rounders</h1>
              <h2>{data[0]}</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.atozservice.in/images/nearme/slide1.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Technicians</h1>
              <h2>{data[1]}</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://c8.alamy.com/comp/MG0996/mexico-citymexicanhispanichistoric-center-centrecalle-bolivardeliveryman-men-malepulling-pushing-dollyheavy-loadjobmanual-laborcardboard-bo-MG0996.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Workers</h1>
              <h2>{data[2]}</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
