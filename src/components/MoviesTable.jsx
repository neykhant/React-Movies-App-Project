//jshint ignore:start

import React, { Component } from "react";
import Like from "./common/Like";
import TableHeader from "./common/TableHeader";

class MoviesTable extends Component {

    columns=[
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        { key: 'liked'},
        { key: 'delete'}
    ];

  

  render() {
    const { movies, sortColumn, onSort, onLike, onDelete } = this.props;

    return (
      <table className="table">
          <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
        {/* <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Gener</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Rante</th>
            <th>Likes</th>
            <th>Deletes</th>
          </tr>
        </thead> */}
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like Liked={movie.liked} onClick={() => onLike(movie)} />{" "}
              </td>
              <td
                className="btn btn-warning btn-sm"
                onClick={() => onDelete(movie)}
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;

// const MoviesTable = (props) => {
//   return (

//   );
// };

// export default MoviesTable;
