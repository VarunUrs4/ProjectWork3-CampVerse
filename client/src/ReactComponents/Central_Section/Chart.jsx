import React from "react";
// import chart from "../Images/Chart.png";


const Chart = () => {
    return(<>
        <div className="border_curve chart_container">
        <h4 className="chart_title">Chart Title</h4>
        <div className="chart">
          {/* <img src={chart} alt="chart" /> */}
          <div className="legend_box">
            <h5 className="Legend_title">Legend</h5>
            <div className="legend_box_container">
              <div className="box box1">
                <div className="legend_value">100</div>
                <div className="legend_name">One</div>
              </div>
              <div className="box box1">
                <div className="legend_value">100</div>
                <div className="legend_name">One</div>
              </div>
            </div>   
          </div>
        </div> 
      </div>
    </>);
}

export default Chart;