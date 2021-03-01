import React, { Component } from 'react';

class Searchbar extends Component {
    
    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5 ">
                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control "
                            placeholder="Search movie"
                            onChange={this.props.searchMovieP}     
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default Searchbar;