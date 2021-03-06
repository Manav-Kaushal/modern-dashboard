import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";
import { useStateContext } from "@context/ContextProvider";

export { NavLink };

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: false,
};

function NavLink({ href, exact, children, ...props }) {
  const { currentColor } = useStateContext();
  const { query } = useRouter();
  const isActive = exact
    ? query.key === href.query.key
    : query.key.startsWith(href.query.key);

  if (isActive) {
    props.className +=
      " flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
    props.style = {
      backgroundColor: currentColor,
    };
  } else {
    props.className +=
      " flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}
