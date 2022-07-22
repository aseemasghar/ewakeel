import React from 'react'
import ClientNav from './ClientNav'

const PostCase = () => {
  return (
    <>
    <ClientNav/>
    <div className="my-5 container">
<h4 className='text-center'>POST YOUR LEGAL PROBLEM, AND START FINDING VERIFIED LAWYERS</h4>
<p className='text-center'>(Cases submitted here will only be visible to Lawyers registered with us in Pakistan)</p>

<form action="">
  <div className="row d-flex justify-content-center">
<div class="m-2 mb-0 col-md-6">
  <label for="formGroupExampleInput" class="form-label"><b>LEGAL CASE TITLE</b></label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="e.g Dispute in Business Partnerships"/>
</div>
<p className='col-md-6'>Brief heading of the Legal Problem you are facing</p>
<div class="m-2 mb-0 col-md-6">
  <label for="formGroupExampleInput2" class="form-label"><b>CITY</b></label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="e.g Islamabad"/>
</div>
<p className='col-md-6'>City of your Residence</p>
</div>
<div class="row d-flex justify-content-center">
  <div className="col-md-6">
  <label for="exampleFormControlTextarea1" class="col form-label"><b>DESCRIPTION OF THE LEGAL PROBLEM</b></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
</div>
</div>
<div className="row m-3 d-flex justify-content-center">
<button type="submit" class="col-md-6 w-25 btn btn-primary">Submit</button>
</div>


</form>


    </div>
    
    </>
  )
}

export default PostCase