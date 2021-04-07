import React from 'react';

const SearchBox = () => {
    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-md-6 m-auto">
                    <form className="row g-1">
                        <div className="col-8">
                            <input type="text" className="form-control" id="search" placeholder="Search Course"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary px-5 mb-3"><i className="fas fa-search"></i> Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;