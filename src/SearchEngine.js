import React from "react";
import "./SearchEngine.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-4">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              id="city-input"
              autoComplete="off"
            />
          </div>
          <div className="col-sm-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
              id="submit-button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
