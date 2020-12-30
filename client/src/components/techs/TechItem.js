import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech: { firstName, lastName, _id }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(_id);
    M.toast({ html: "Technician deleted" });
  };
  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.prototype = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
