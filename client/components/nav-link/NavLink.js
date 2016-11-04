import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router'

/**
 * HOC that replaces Link with a span if it is active.
 */
const NavLink = ({ className = '', activeClassName, to, path, children }) => {
  if (path === to) {
    return <span className={`${className} active`}>{children}</span>
  }
  return (
    <Link to={to} className={className} disabled={path === to}>
      {children}
    </Link>
  );
};

export default connect(
  (state, ownProps) => ({
    ...ownProps,
    path: state.routing.locationBeforeTransitions.pathname,
  })
)(NavLink);
