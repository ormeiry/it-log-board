import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import TechItem from "./TechItem";

const TechListModal = () => {
  const { techs, loading } = useSelector((state) => state.tech);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech._id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
