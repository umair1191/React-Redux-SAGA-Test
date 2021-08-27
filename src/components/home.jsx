import React, { Component } from "react";
import { connect } from "react-redux";
import Movies from "./movies";
import "../style.css";
import { loadMovies } from "../actions";

class Home extends Component {
  componentDidMount() {
    this.props.loadMovies(this.props.currentpage);
  }

  render() {
    const { movies } = this.props;
    return (
        <Movies movies={movies} />
    );
  }
}

const mapStateToProps = ({
  loading,
  movies,
  currentpage,
  totalresults,
  genres
}) => ({
  currentpage,
  loading,
  movies,
  genres,
  totalresults,
});

const mapDispatchToProps = dispatch => ({
  loadMovies: page => dispatch(loadMovies(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
