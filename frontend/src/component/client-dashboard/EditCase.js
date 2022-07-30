import React from 'react'
import ClientNav from './ClientNav'

const EditCase = () => {
  return (
    <>
    <ClientNav/>
    <div className="my-5 container">
<h4 className='text-center'>Edit Case</h4>
<form action="">
  <div className="row d-flex justify-content-center">
<div className="m-2 mb-0 col-md-6">
  <label htmlFor="formGroupExampleInput" className="form-label"><b>LEGAL CASE TITLE</b></label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="e.g Dispute in Business Partnerships"/>
</div>
<p className='col-md-6'>Brief heading of the Legal Problem you are facing</p>
<div className="m-2 mb-0 col-md-6">
  <label htmlFor="formGroupExampleInput2" className="form-label"><b>CITY</b></label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="e.g Islamabad"/>
</div>
<p className='col-md-6'>City of your Residence</p>
</div>
<div className="row d-flex justify-content-center">
  <div className="col-md-6">
  <label htmlFor="exampleFormControlTextarea1" className="col form-label"><b>DESCRIPTION OF THE LEGAL PROBLEM</b></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
</div>
</div>
<div className="row m-3 d-flex justify-content-center">
<button type="submit" className="col-md-6 w-25 btn btn-primary">Submit</button>
</div>


</form>


    </div>
    
    </>
  )
}

export default EditCase