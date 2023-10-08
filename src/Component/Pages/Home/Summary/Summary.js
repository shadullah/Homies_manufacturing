import { faResolving } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Summary = () => {
  return (
    <div className="my-28 text-center">
      <div>
        <h1 className="text-4xl mb-10 font-bold text-orange-500">
          Homie's At a Glance
        </h1>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow text-3xl bg-yellow-200 px-10">
        <div className="stat">
        <div>
            <FontAwesomeIcon icon={faArrowAltCircleUp}></FontAwesomeIcon>
          </div>
          <div className="stat-title">Projects</div>
          <div className="stat-value">650+</div>
        </div>

        <div className="stat">
          <div>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </div>
          <div className="stat-title">Customers</div>
          <div className="stat-value">4,200+</div>
        </div>

        <div className="stat">
        <div>
            <FontAwesomeIcon icon={faResolving}></FontAwesomeIcon>
          </div>
          <div className="stat-title">Reviews</div>
          <div className="stat-value">1,200+</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
