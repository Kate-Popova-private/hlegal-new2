import {Link, useMatches} from "react-router-dom";
import "./breadcrumbs.scss"
import {useEffect} from "react";

function Breadcrumbs(props) {
    let matches = useMatches();
    let crumbs = matches
        // first get rid of any matches that don't have handle and crumb
        .filter((match) => Boolean(match.handle?.crumb))
        // now map them into an array of elements, passing the loader
        // data to each one
        .map((match) => match.handle.crumb(match.data));
    useEffect(() => {
        console.log('crumbs', crumbs);
    }, [])
    return (
        <div className="breadcrumbs">
            {crumbs.map((crumb, index) => (
                <Link to={crumb.props.to} className={`breadcrumbs__crumb breadcrumbs__crumb_${props.colorTheme}`}
                      key={index}>{crumb.props.children}</Link>
                // <span className={`breadcrumbs__crumb breadcrumbs__crumb_${props.colorTheme}`}
                //       key={index}>{crumb}</span>
            ))}
        </div>
    );
}

export default Breadcrumbs;