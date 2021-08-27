import React, { Component } from "react";
import SingleMovie from "./single-movie";
import { getaMovie, clearState } from "../actions";
import { connect } from "react-redux";

class ItemDetails extends Component {

  componentDidMount() {
    this.props.getaMovie(this.props.match.params.id);
  }

  render() {
    if (this.props.movieinfo !== null) {
      const { movieinfo } = this.props;
      return (
        <SingleMovie movieinfo={movieinfo} />
      );
    } else return <div style={{color:"white"}}>No Details Found!</div>;
  }
}

const mapStateToProps = ({ movieid , movieinfo }) => ({
  movieid,
  movieinfo
});
const mapDispatchToProps = dispatch => ({
  getaMovie: id => dispatch(getaMovie(id)),
  clearState: () => dispatch(clearState())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetails);
