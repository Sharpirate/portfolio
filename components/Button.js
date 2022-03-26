import Link from "next/link";

const types = {
  primary: "primary",
  secondary: "secondary"
}

export { types as buttonTypes };

function Button({ href, type, children }) {
  let colorStyle = "";

  switch (type) {
    case types.secondary:
      colorStyle = "bg-white text-gray-500";
      break;
    case types.primary:
    default:
      colorStyle = "bg-gray-500 text-white";
      break;
  }

  return (
    <Link href={href}>
      <a draggable={false} className={`px-24 py-8 body rounded-4 ${colorStyle}`}>{children}</a>
    </Link>
  );
}

export default Button;