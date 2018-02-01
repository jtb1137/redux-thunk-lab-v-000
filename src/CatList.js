import React from 'react';

const CatList = (props) => {
    function createList() {
        return props.catPics.map(pic => {
            return (
                <div className="col-lg-12">
                    <div className="col-lg-6 col-lg-offset-3 well">
                        <img src={pic.url} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}} />
                    </div>
                </div>
            )
        })
    }
    return (
        <div>
            {createList()}
        </div>
    )
}

export default CatList;