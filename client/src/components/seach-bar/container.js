import { connect } from "react-redux";
import { updateSearchBar } from "./actions";
import { SearchBarView } from "./component";

const mapDispatchToProps = {
  onUpdate: updateSearchBar
}

export const SearchBar = connect(null, mapDispatchToProps)(SearchBarView);