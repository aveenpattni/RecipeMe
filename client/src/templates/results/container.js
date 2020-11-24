import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ResultsPageView } from "./results";
import { searchRecipe } from "../../features/search/actions"
import { selectResults } from "./selectors";
import { filtersDomain } from "../../features/filters/selectors";

const mapStateToProps = createStructuredSelector({
  results: selectResults,
  filters: filtersDomain
});

const mapDispatchToProps = {
  searchRecipe
}

export const ResultsPage = connect(mapStateToProps, mapDispatchToProps)(ResultsPageView);