export const tableTheme = {
  root: {
    base: "w-full text-center text-sm text-gray-400",
    shadow:
      "absolute left-0 top-0 -z-10 h-full w-full rounded-md drop-shadow-md",
    wrapper: "relative",
  },
  body: {
    base: "group/body",
    cell: {
      base: "px-0 py-2 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg",
    },
  },
  head: {
    base: "group/head text-xs uppercase text-gray-50 whitespace-nowrap",
    cell: {
      base: "px-0 pb-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-[#28272c] border-b border-gray-500",
    },
  },
  row: {
    base: "group/row bg-[#28272c] text-xs border-b border-gray-500 whitespace-nowrap",
    hovered: "hover:bg-gray-50",
  },
};

export const navbarTheme = {
  root: {
    base: "bg-[#111] py-2 sticky top-0 left-0 w-full z-10 dark:border-gray-700 dark:bg-gray-800 sm:px-4",

    bordered: {
      on: "border",
      off: "",
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container",
      },
    },
  },
  brand: {
    base: "flex items-center",
  },
  collapse: {
    base: "w-full lg:block lg:flex lg:flex-1 lg:w-auto",
    list: "mt-4 flex flex-row flex-1 lg:mt-0 lg:flex-row justify-between gap-4 lg:justify-end lg:space-x-8 lg:text-sm lg:font-medium",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  link: {
    base: "block text-base font-semibold py-2 pl-3 pr-4 lg:p-0",
    active: {
      on: "underline underline-offset-2 text-white dark:text-white lg:bg-transparent lg:text-white",
      off: "border-gray-100 text-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 md:hover:bg-transparent md:hover:text-gold md:dark:hover:bg-transparent md:dark:hover:text-white",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: "",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden transition-transform duration-300 ease-in-out",
    icon: "h-6 w-6 shrink-0 transition-transform duration-300 ease-in-out",
  },
};

export const cardTheme = {
  root: {
    base: "flex rounded-xl bg-white shadow-none dark:border-gray-700 dark:bg-gray-800 w-full",
    children: "flex flex-col justify-center gap-4 p-6 w-full",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:none dark:hover:none",
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};

export const buttonTheme = {
  base: "group relative flex items-stretch justify-center p-0.5 text-center font-bold transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none",
  fullSized: "w-full",
  color: {
    light:
      "bg-white text-gray-900 focus:ring-4 focus:ring-purple-200 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700",
  },
  disabled: "cursor-not-allowed opacity-50",
  isProcessing: "cursor-wait",
  spinnerSlot: "absolute top-0 flex h-full items-center",
  spinnerLeftPosition: {
    xs: "left-2",
    sm: "left-3",
    md: "left-4",
    lg: "left-5",
    xl: "left-6",
  },
  gradientDuoTone: {
    purpleToPink:
      "bg-gradient-to-r from-purple-400 to-pink-600 text-white focus:ring-4 focus:ring-purple-200 enabled:hover:bg-gradient-to-l dark:focus:ring-purple-800",
  },
  inner: {
    base: "flex items-stretch transition-all duration-200",
    position: {
      none: "",
      start: "rounded-r-none",
      middle: "rounded-none",
      end: "rounded-l-none",
    },
    outline: "border border-transparent",
    isProcessingPadding: {
      xs: "pl-8",
      sm: "pl-10",
      md: "pl-12",
      lg: "pl-16",
      xl: "pl-20",
    },
  },
  label:
    "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
  pill: {
    off: "rounded-lg",
    on: "rounded-full",
  },
  size: {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
    xl: "px-6 py-3 text-base",
  },
};

export const paginationTheme = {
  base: "flex justify-center",
  pages: {
    base: "xs:mt-0 mt-6 mb-4 inline-flex items-center",
    previous: {
      base: "ml-0 rounded-l-lg border border-darkgrey bg-neutral-700 px-3 py-2 text-white hover:border-white hover:bg-neutral-500",
      icon: "h-5 w-5",
    },
    next: {
      base: "rounded-r-lg border border-darkgrey bg-neutral-700 px-3 py-2 text-white hover:border-white hover:bg-neutral-500",
      icon: "h-5 w-5",
    },
    selector: {
      base: "w-12 border border-darkgrey bg-neutral-700 py-2 text-white hover:border-white rounded-md",
      active: "bg-neutral-500 text-white",
      disabled: "cursor-not-allowed opacity-50",
    },
  },
};

