import { connect } from "react-redux";
import { ResultsPageView } from "./results";
import { searchRecipe } from "../../features/search/actions"

const mapDispatchToProps = {
  searchRecipe
}

export const ResultsPage = connect(null, mapDispatchToProps)(ResultsPageView);