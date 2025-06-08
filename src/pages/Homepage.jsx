import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "./AppNav"
export default function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>WorldWise</h1>
        <Link to='/app'>Go to the APP</Link>
    </div>
  )
}
