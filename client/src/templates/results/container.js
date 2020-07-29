import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ResultsPageView } from "./results";
import { searchRecipe } from "../../features/search/actions"
import { selectResults } from "./selectors";

const mapStateToProps = createStructuredSelector({
  results: selectResults
});

const mapDispatchToProps = {
  searchRecipe
}

export const ResultsPage = connect(mapStateToProps, mapDispatchToProps)(ResultsPageView);