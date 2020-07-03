import React from 'react';



export default function(props) {
    if (props.start == false) {
        return (
            <div className="guideline-wrapper">
                <div className="guideline">
                    For each value listed, select the way you feel about that value. Quickly respond and go with your gut.
                </div>
                <div className="guideline">
                    Do not base your decision on what others or society thinks about the value.
                </div>
                <div className="guideline">
                    Do not choose based on how you feel you are currently acting when it comes to that value.
                </div>
                <div className="guideline">
                    Base your decision on the true feelings and intentions in your heart and mind. What is your natural tendency?
                </div>
                <div className="guideline">
                    Be honest in order to get the results you desire. There are no right or wrong answers.
                </div>
                <div className="guideline">
                    For the following enter a number 1-5. 5 being most important. 1 being the least important.
                </div>
            </div>

        )
    }  else {
        return null
    };
}