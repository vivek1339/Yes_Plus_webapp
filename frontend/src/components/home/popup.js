import React from 'react';
const Popup = () =>{
        return (
        <div class="yp_popup">
	        <div class="modal fade" id="pop-up" tabindex="-1" role="dialog">
  	            <div class="modal-dialog" role="document">
    	            <div class="modal-content">
    	                <div class="modal-body">
    		              <button type="button" className="close" data-dismiss="modal" aria-label="Close"> 
      		                    <span aria-hidden="true" >&times;</span>
        		            </button>
						<div class="popup-img"><img src="/images/certificate.jpg" alt="" width="100" height="100"/></div>
        		          <p>You Will Earn a Certificate which is used to your Resume. <br></br>
							  Resume is a place where you can show your extra curricular activities 
							  and co-curricular activities So, dont miss it!!
						  </p>
      		            </div>
		            </div>
                </div>
	        </div>
		</div>
	
    );
};
export default Popup;