import React from "react";

export const ContainerImgCard = ({ img1, img2})=>{


    return(

        <div className="display-card">

            <div> 
                 <img src={img1} alt="" /> 
            </div>

            <div>
                <img src={img2} alt="" />  
            </div>
            
        </div>
        
    )
}






