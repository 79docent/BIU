import React from "react";

const SearchArea = (props) =>  {
    return (
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Wyszukaj film po nazwie.." type="text" onChange={props.handleChange}></input>
                            <p className="red">{props.errors}</p>
                        </div>
                    </form>   
                </section>
            </div>
        </div>
    )
}

export default SearchArea;