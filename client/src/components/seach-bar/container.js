import { connect } from "react-redux";
import { updateSearchBar } from "./actions";
import { SearchBarView } from "./component";
import {selectSearch} from "./selectors";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  input: selectSearch
});

const mapDispatchToProps = {
  onUpdate: updateSearchBar
}

export const SearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarView);