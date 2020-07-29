import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectSearchParams } from "./selectors";
import { PaginationFootView } from "./component";
import { updatePageAction } from "../search/actions";

const mapStateToProps = createStructuredSelector({
  searchProps: selectSearchParams
});

const mapDispatchToProps = {
  updatePage: updatePageAction
}

export const PaginationFoot = connect(mapStateToProps, mapDispatchToProps)(PaginationFootView);