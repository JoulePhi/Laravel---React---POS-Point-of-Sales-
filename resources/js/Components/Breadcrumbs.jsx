import React from "react";

const BreadcrumbItem = ({ children, href }) => (
    <li
        className={`text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 inline-flex items-center px-1 text-sm font-medium`}
    >
        {href ? (
            <a href={href} className="inline-flex items-center">
                {children}
                <svg
                    className="ml-1 w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.843l-4.707-4.707L4.343 8l6 6z" />
                </svg>
            </a>
        ) : (
            <span>{children}</span>
        )}
    </li>
);

const Breadcrumb = ({ items }) => (
    <nav
        className={`flex border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 text-sm font-medium`}
    >
        <ul className="flex items-center space-x-2">
            {items.map((item, index) => (
                <BreadcrumbItem
                    key={index}
                    href={item.href ? item.href : undefined}
                >
                    {item.label}
                </BreadcrumbItem>
            ))}
        </ul>
    </nav>
);

export default Breadcrumb;