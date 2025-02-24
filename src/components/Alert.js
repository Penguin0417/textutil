import React from "react";


function Alert(props) {
  return (
    props.alert && <div class="alert alert-success" role="alert">
     <strong>{props.alert.type} </strong>{props.alert.msg}
    </div>
  );
}

export default Alert;
