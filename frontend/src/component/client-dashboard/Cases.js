import React from 'react'
const Cases = () => {
   
  return (
    <>
    <div className="container ">
        <h4 className="mt-4 p-4 rounded text-light bg-secondary">
          <i class="bi bi-briefcase"></i> MY CASES
        </h4>
        <div className="case w-75 m-2  row border border-secondary rounded">
          <h6>
            <b>Title : </b>Family case
          </h6>
          <h6>
            <b>Location : </b>Islamabd
          </h6>
          <h6>
            <b>Posted on : </b>23/8/2022
          </h6>
          <h6>
            <b>Case Description : </b>
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            debitis obcaecati, alias deleniti corrupti commodi aspernatur eum
            tempore vitae repudiandae.
          </p>
          <button type="submit" class="col-md-4 mx-2 mb-2 w-25 btn btn-warning">
            Edit
          </button>
          <button type="submit" class="col-md-4 w-25 mb-2 btn btn-danger">
            Delete
          </button>
        </div>

      </div>
    </>
  )
}

export default Cases