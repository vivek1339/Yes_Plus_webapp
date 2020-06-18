import React from 'react';

export default class Popup extends React.Component{
    return(
        <div className="yp_popup">
	        <div className="modal fade" id="pop-up" tabindex="-1" role="dialog">
  	            <div className="modal-dialog" role="document">
    	            <div className="modal-content">
    	                <div className="modal-body">
    		                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      		                    <span aria-hidden="true" >&times;</span>
        		            </button>
        		            ...hi...
      		            </div>
		            </div>
                </div>
	        </div>
        </div>
    );
}